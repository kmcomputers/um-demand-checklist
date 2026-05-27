// Generates public/icon-192.png, icon-512.png, apple-touch-icon.png
// White background, full-colour UM star emblem (red + navy)
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ── Emblem bounding box within the app's SVG (viewBox "0 0 1440 499.41") ──
// Elements included: the 6 red trapezoids + the navy pentagon star
//   X: 324.66 → 1115.34  (width  790.68)
//   Y: 8.69   → 317.71   (height 309.02)
//
// Target canvas: 512 × 512, padding 40px each side → drawable 432 × 432
//   scaleX = 432 / 790.68 = 0.5463  (width-constrained)
//   scaledH = 309.02 × 0.5463 = 168.8
//   tx = 40 − 324.66 × 0.5463 = −137.34
//   ty = (512 − 168.8) / 2 − 8.69 × 0.5463 = 166.85   → vertical centre

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <!-- white background -->
  <rect width="512" height="512" rx="80" fill="#ffffff"/>

  <!-- UM star emblem in original brand colours, centred -->
  <g transform="translate(-137.34, 166.85) scale(0.5463)">
    <!-- red left chevrons -->
    <polygon fill="#b02436" points="520.27 126.73 324.66 126.75 369.9 165.63 578.37 165.61 520.27 126.73"/>
    <polygon fill="#b02436" points="633.9 202.77 621.26 241.66 458.38 241.68 413.15 202.79 633.9 202.77"/>
    <polygon fill="#b02436" points="609.17 278.82 596.52 317.71 546.86 317.71 501.63 278.84 609.17 278.82"/>
    <!-- red right chevrons -->
    <polygon fill="#b02436" points="919.74 126.73 1115.34 126.75 1070.1 165.63 861.63 165.61 919.74 126.73"/>
    <polygon fill="#b02436" points="806.1 202.77 818.74 241.66 981.62 241.68 1026.85 202.79 806.1 202.77"/>
    <polygon fill="#b02436" points="830.83 278.82 843.48 317.71 893.14 317.71 938.37 278.84 830.83 278.82"/>
    <!-- navy pentagon star -->
    <polygon fill="#2d2c71" points="719.85 8.69 758.2 126.73 882.32 126.73 781.91 199.68 820.26 317.71 719.85 244.76 619.44 317.71 657.8 199.68 557.39 126.73 681.5 126.73 719.85 8.69"/>
  </g>
</svg>`;

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

const svgBuf = Buffer.from(iconSvg);

Promise.all([
  sharp(svgBuf).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png')),
  sharp(svgBuf).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png')),
  sharp(svgBuf).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png')),
]).then(() => {
  console.log('✓ Icons generated: icon-512.png, icon-192.png, apple-touch-icon.png');
}).catch(err => {
  console.error('Icon generation failed:', err.message);
  process.exit(1);
});
