const path = require('path');
const shell = require('shelljs');
const dir = 'node_modules/react-id-swiper/lib/styles/css';


console.log("Fixing Slider")
shell.mkdir('-p', dir);
const fs = require('fs-extra');
fs.copySync(path.resolve(__dirname,'./react-id-swiper/styles/css/swiper.css'), path.resolve(dir, 'swiper.css'));



