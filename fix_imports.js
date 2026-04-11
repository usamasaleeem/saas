const fs = require('fs');
const files = [
  'src/components/sections/Hero.tsx',
  'src/app/(marketing)/pricing/page.tsx',
  'src/app/(marketing)/features/page.tsx',
  'src/app/(marketing)/about/page.tsx',
  'src/app/(marketing)/blog/page.tsx'
];
files.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    fs.writeFileSync(f, c.replace('import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";', 'import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";\nimport { FadeIn } from "@/components/animations/FadeIn";'));
  }
});
