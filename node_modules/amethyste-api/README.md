<div align="center">

  <p>
    <a href="https://www.npmjs.com/package/amethyste-api"><img src="https://img.shields.io/npm/v/amethyste-api.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/amethyste-api"><img src="https://img.shields.io/npm/dt/amethyste-api.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/amethyste-api/"><img src="https://nodei.co/npm/amethyste-api.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>
	
## Description
Module officiel pour l'api du bot Améthyste

## Utilisation
Documentation officielle : <a href="https://docs.api.amethyste.moe/">https://docs.api.amethyste.moe/</a>

## Installation
```
npm i amethyste-api
```

## Endpoint

 - url = Image url
 - pixelize (entre 1 et 50, default: 8)
 - posterize (entre 1 et 100, defaut : 5 )
 - blur (entre 1 et 30, defaut : 5)


|Nom|Params|
|--|--|
|circle|url|
|rejected|url|
|approved|url|
|glitch|url|
|distort|url|
|sepia|url|
|contrast|url|
|greyscale|url|
|invert|url|
|pixelize|url, pixelize|
|blur|url, blur|
|posterize|url, posterize|
|beautiful|url|
|afusion => avatar-fusion|url|
|wanted|url|
|3000years|url|
|rip |url|
|utatoo |url|
|wasted |url|
|frame |url|
|moustache |url|
|scary |url|

## Utilisation

**Connexion :**
```js
const ameClient = require("amethyste-api")
const ameApi = new ameClient("token")
```
**Endpoint Generate :**
```js
ameApi.generate("endpoint", {
    "url" : "image url"
}).then(image => {
    console.log(image)
}).catch(err => {
    throw err;
});
```
*Returns*
```
<Buffer ... >
```
**Endpoint Generate Exemple:**
```js
ameApi.generate("glitch", {
    "url" : "https://cdn.discordapp.com/avatars/450352584302002186/c0ff7e943ab89560503b8e99591ff888.png?size=2048"
}).then(image => {
    console.log(image)
}).catch(err => {
    throw err;
})
```
*Returns*
```
<Buffer ... >
```

**Endpoint Image Exemple:**
```js
ameApi.image("wallpaper", {
    "nsfw" : "false"
}).then(image => {
    console.log(image)
}).catch(err => {
    throw err;
});
```
*Returns*
```json
{
  "status": 200,
  "url": "https://cdn.amethyste.moe/wallpaper/14ebdfb3f9a9e4025b54ab759f1ad9e60bd0.jpg"
}
```
