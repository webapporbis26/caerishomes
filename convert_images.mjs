import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(process.cwd(), 'src', 'assets');
const componentsDir = path.join(process.cwd(), 'src');

const imagesToConvert = [];
function walkAssets(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walkAssets(p);
    } else {
      if (/\.(jpg|jpeg|png)$/i.test(p)) {
        imagesToConvert.push(p);
      }
    }
  }
}
walkAssets(assetsDir);

const replacements = [];

async function convertAll() {
  console.log(`Found ${imagesToConvert.length} images to convert.`);
  for (const oldPath of imagesToConvert) {
    const dir = path.dirname(oldPath);
    const ext = path.extname(oldPath);
    const baseName = path.basename(oldPath, ext);
    const newPath = path.join(dir, `${baseName}.webp`);
    
    console.log(`Converting ${path.basename(oldPath)} to WebP...`);
    try {
      await sharp(oldPath).webp({ quality: 80 }).toFile(newPath);
      fs.unlinkSync(oldPath);
      
      const oldNameWithExt = path.basename(oldPath);
      const newNameWithExt = `${baseName}.webp`;
      replacements.push({ oldName: oldNameWithExt, newName: newNameWithExt });
    } catch (e) {
      console.error(`Failed to convert ${oldPath}`, e);
    }
  }
  
  function replaceInCode(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const p = path.join(dir, file);
      if (fs.statSync(p).isDirectory()) {
        replaceInCode(p);
      } else if (/\.(ts|tsx)$/.test(p)) {
        let content = fs.readFileSync(p, 'utf8');
        let changed = false;
        for (const rep of replacements) {
          const regex = new RegExp(rep.oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          if (regex.test(content)) {
            content = content.replace(regex, rep.newName);
            changed = true;
          }
        }
        if (changed) {
          fs.writeFileSync(p, content);
          console.log(`Updated imports in ${p}`);
        }
      }
    }
  }
  
  console.log('Updating code imports...');
  replaceInCode(componentsDir);
  console.log('Done!');
}

convertAll();
