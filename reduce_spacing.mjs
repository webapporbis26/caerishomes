import fs from 'fs';
import path from 'path';

const sectionsDir = path.join(process.cwd(), 'src', 'components', 'sections');

function replaceSpacing(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      replaceSpacing(p);
    } else if (p.endsWith('.tsx')) {
      let content = fs.readFileSync(p, 'utf8');
      const original = content;
      
      // Reduce padding values
      content = content.replace(/py-32/g, 'py-16');
      content = content.replace(/py-24/g, 'py-12');
      content = content.replace(/py-20/g, 'py-10');
      content = content.replace(/py-16/g, 'py-10');
      content = content.replace(/py-12/g, 'py-8');
      
      if (content !== original) {
        fs.writeFileSync(p, content);
        console.log(`Updated spacing in ${file}`);
      }
    }
  }
}

replaceSpacing(sectionsDir);
