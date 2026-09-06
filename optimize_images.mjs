import fs from "node:fs";
import path from "node:path";

const dirs = [
  path.join(process.cwd(), "src/components/sections"),
  path.join(process.cwd(), "src/routes"),
];

const skipFiles = ["hero.tsx", "projects-hero.tsx", "page-hero.tsx"];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      processDir(p);
    } else if (p.endsWith(".tsx") && !skipFiles.includes(file)) {
      let content = fs.readFileSync(p, "utf8");

      // Match <img ... /> tags and inject loading="lazy" decoding="async" if not already present
      // We'll replace '<img ' with '<img loading="lazy" decoding="async" '
      // but first remove existing loading/decoding attrs to avoid duplicates.

      const imgRegex = /<img\s([^>]+)>/g;
      let changed = false;

      content = content.replace(imgRegex, (match, attrs) => {
        if (!attrs.includes('loading="lazy"')) {
          changed = true;
          // Remove any existing loading or decoding attributes to avoid duplicates
          let newAttrs = attrs
            .replace(/loading="[^"]*"\s*/g, "")
            .replace(/decoding="[^"]*"\s*/g, "");
          return `<img loading="lazy" decoding="async" ${newAttrs}>`;
        }
        return match;
      });

      if (changed) {
        fs.writeFileSync(p, content, "utf8");
        console.log(`Optimized images in ${file}`);
      }
    }
  }
}

dirs.forEach(processDir);
console.log("Image optimization complete.");
