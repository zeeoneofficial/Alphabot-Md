const request = require('request-promise');

class Main {

  static async getInfo(url) {
    let result = {
      download: {
        hd: undefined,
        sd: undefined
      },
      thumb:    undefined,
      title:    undefined,
      error:    null
    };
    let videoPageResponse;
    try {
      videoPageResponse = await request.get(url, {
        resolveWithFullResponse: true,
        headers:                 {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.47 Safari/537.36'
        }
      });
      videoPageResponse.body.replace(/hd_src_no_ratelimit:"([^"]+)"/, (content, link) => { // hd link
        result.download.hd = link;
        return content;
      }).replace(/sd_src_no_ratelimit:"([^"]+)"/, (content, link) => { // sd link
        result.download.sd = link;
        return content;
      }).replace(/video_id:"([^"]+)"/, (content, videoId) => { // thumb link
        result.thumb = `https://graph.facebook.com/${videoId}/picture`;
        return content;
      });
      // title
      let matches;
      if(matches = videoPageResponse.body.match(/h2 class="uiHeaderTitle"?[^>]+>(.+?)<\/h2>/)) {
        result.title = matches[matches.length - 1];
      } else if(matches = videoPageResponse.body.match(/title id="pageTitle">(.+?)<\/title>/)) {
        result.title = matches[matches.length - 1];
      }
    } catch(e) {
      result.error = e;
    }
    return result;
  }

}

module.exports = Main;

// Main.getInfo('https://www.facebook.com/nho.xinh.528/videos/vb.100005631701720/411376002393453/?type=2&video_source=user_video_tab').then((v) => console.log(JSON.stringify(v, null, 2)));
// Main.getInfo('https://www.facebook.com/welaxvideo/videos/2123584921233057/').then((v) => console.log(JSON.stringify(v, null, 2)));