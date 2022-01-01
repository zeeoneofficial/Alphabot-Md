pkg update
pkg install nodejs
pkg install libwebp
pkg install ffmpeg
pkg install wget
pkg install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
cd node_modules/@adiwajshing/baileys-md
npm i typescript -g
tsc
cd ../../../