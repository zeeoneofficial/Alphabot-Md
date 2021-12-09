<p align="center">
<img src="https://avatars0.githubusercontent.com/u/4674786?s=400&u=2f77d382a4428c141558772a2b7ad3a36bebf5bc&v=4" width="128" height="128"/>
</p>
<p align="center">
<a href="#"><img title="Twitter-Direct-URL" src="https://img.shields.io/badge/Twitter%20Direct%20URL-green?colorA=%23ff0000&colorB=27b6e5&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/victorsouzaleal"><img title="Autor" src="https://img.shields.io/badge/Author-victorsouzaleal-27b6e5.svg?style=for-the-badge&logo=github"></a>
</p>
</p>
<p align="center">
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fvictorsouzaleal%2Ftwitter-direct-url&count_bg=%2327B6E5&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
<a href="#"><img title="Version" src="https://img.shields.io/github/package-json/v/victorsouzaleal/twitter-direct-url?color=27B6E5&logo=github&style=flat-square"></a>
<a href="#"><img title="Size" src="https://img.shields.io/bundlephobia/min/twitter-url-direct?color=27B6E5&logo=npm&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/twitter-direct-url/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/victorsouzaleal/twitter-direct-url?color=27B6E5&logo=github&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/twitter-direct-url/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/victorsouzaleal/twitter-direct-url?color=27B6E5&logo=github&style=flat-square"></a>
<a href="#"><img title="MAINTENED" src="https://img.shields.io/badge/MAINTENED-YES-27B6E5?style=flat-square"/></a>
</p>

## Instalation :
```bash
> npm i --save twitter-url-direct
```

## Example
```js
const twitterGetUrl = require("twitter-url-direct")
let response = await twitterGetUrl("https://twitter.com/VideosDoSeuDia/status/1367431296604078082")
console.log(response)
```

## Output Exemple - Video Tweet
```
{
    found: true,
    type: "video",
    dimensionsAvailable: 3,
    download: [
         {
            width: '480',
            height: '480',
            dimension: '480x480',
            url: 'https://video.twimg.com/ext_tw_video/1367431274021928962/pu/vid/480x480/Mci5Lz4vRDtmGMCM.mp4?tag=10'
        },
        {
            width: '320',
            height: '320',
            dimension: '320x320',
            url: 'https://video.twimg.com/ext_tw_video/1367431274021928962/pu/vid/320x320/EBqdjRZKrUDG1Q_Q.mp4?tag=10'
        },
        {
            width: '720',
            height: '720',
            dimension: '720x720',
            url: 'https://video.twimg.com/ext_tw_video/1367431274021928962/pu/vid/720x720/jQpjRIlF03JxfgwD.mp4?tag=10'
        }
    ]
}
```

## Output Exemple - GIF Tweet
```
{
    found: true,
    type: "video",
    dimensionsAvailable: 1,
    download: [
         {
            width: null,
            height: null,
            dimension: null,
            url: 'https://video.twimg.com/tweet_video/EkkF8BfWMAADGiN.mp4'
        },
    ]
}
```

## Output Exemple - Image Tweet
```
{
    found: true,
    type: "image",
    download: "https://pbs.twimg.com/media/EvpS9B9WgAoim8w.jpg"
}
```

## Output Exemple - Not Found Video/Image Tweet
```
{
    found: false,
}
```