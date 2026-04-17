const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace Font Family
content = content.replace(
  `fontFamily:\n          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"`,
  `fontFamily: "'Poppins', sans-serif"`
);
// In case the formatting was slightly different:
content = content.replace(
  `fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"`,
  `fontFamily: "'Poppins', sans-serif"`
);

// Replace Font Weights
// 800 -> 700 (Bold)
content = content.replaceAll('fontWeight: 800', 'fontWeight: 700');
// 600 -> 500 (Medium)
content = content.replaceAll('fontWeight: 600', 'fontWeight: 500');

// Replace Colors
// Primary Blue (Call-to-Action): #376FE5 replaces #1a5eb8
content = content.replaceAll('#1a5eb8', '#376FE5');

// Navy Blue: #012A4A replaces #1a1f2e (Dark Text) and #0d2f5e (Gradient start)
content = content.replaceAll('#1a1f2e', '#012A4A');
content = content.replaceAll('#0d2f5e', '#012A4A');

// Deep Blue: #22577A replaces #1a2f5e (Video gradient start)
content = content.replaceAll('#1a2f5e', '#22577A');

// Mid Blue: #118AB2 replaces #1e73d4 (Hero gradient end)
content = content.replaceAll('#1e73d4', '#118AB2');

// Light Grey: #EFF3F9 replaces #f8f9fc, #eef4fb, #dce8f5, #eef0f4
content = content.replaceAll('#f8f9fc', '#EFF3F9');
content = content.replaceAll('#eef4fb', '#EFF3F9');
content = content.replaceAll('#dce8f5', '#EFF3F9');
content = content.replaceAll('#eef0f4', '#EFF3F9');

fs.writeFileSync('src/App.tsx', content);
console.log("Replaced fonts and colors in App.tsx!");
