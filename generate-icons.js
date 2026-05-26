// Generates public/icon-192.png and public/icon-512.png from an SVG
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// UM star + navy background — standalone icon SVG
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#2c2d71"/>
  <!-- UM star (scaled from the app logo viewBox 0 0 1440 499.41 → centred 100x100) -->
  <g transform="translate(50,50) scale(0.062) translate(-719.85,-213.22)">
    <polygon fill="#ffffff"
      points="719.85 8.69 758.2 126.73 882.32 126.73 781.91 199.68 820.26 317.71
              719.85 244.76 619.44 317.71 657.8 199.68 557.39 126.73 681.5 126.73 719.85 8.69"/>
  </g>
</svg>`;

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

const svgBuf = Buffer.from(iconSvg);

Promise.all([
  sharp(svgBuf).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png')),
  sharp(svgBuf).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png')),
  sharp(svgBuf).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png')),
]).then(() => {
  console.log('Icons generated: icon-192.png, icon-512.png, apple-touch-icon.png');
}).catch(err => {
  console.error('Icon generation failed:', err.message);
  process.exit(1);
});
