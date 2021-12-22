# Usage:

```
require('fb-video-downloader').getInfo('https://www.facebook.com/welaxvideo/videos/2123584921233057/').then((info) => console.log(JSON.stringify(info, null, 2)));
```

# Result:

```
{
  "download": {
    "hd": "https://z-p3-video-sin6-1.xx.fbcdn.net/v/t42.9040-2/10000000_248760712335204_5287801269107294208_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9oZCJ9&oh=a923ee2a57d80acf79b0d7ae8e01422e&oe=5AE5876E",
    "sd": "https://z-p3-video-sin6-1.xx.fbcdn.net/v/t42.9040-2/31217722_170271057129759_3073047764553170944_n.mp4?_nc_cat=0&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&oh=5ebe9fc0d540e411b5811d07bb863e45&oe=5AE570E2"
  },
  "thumb": "https://graph.facebook.com/2123584921233057/picture",
  "title": "WeLax Video - Tao cũng cạn lời với bà này luôn. Người Tây...",
  "error": null
}
```