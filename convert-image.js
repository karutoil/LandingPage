const sharp = require('sharp');
const path = require('path');

// Convert avatar.png to avatar.webp
sharp(path.join(__dirname, 'src/assets/avatar.png'))
  .webp({ quality: 90, lossless: false })
  .toFile(path.join(__dirname, 'src/assets/avatar.webp'))
  .then(info => {
    console.log('Conversion successful!');
    console.log(info);
  })
  .catch(err => console.error('Error converting image:', err));