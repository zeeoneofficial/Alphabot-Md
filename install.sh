#!/usr/bin/bash

pkg install imagemagick git nodejs ffmpeg libwebp mc nano yarn
rm -rf node_modules 
npm install
rm -rf session.json 
rm -rf store.json
npm start

echo "All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
