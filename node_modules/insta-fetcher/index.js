/* Muhamad Ristiyanto _ https://github.com/Gimenz
 * Selasa, 9 Maret 2021
 */

const axios = require('axios');

/**
 * @params {String} url the url of instagram post. must public account!
 * @params {String} sessionId (optional)
 * @returns {Promise<Object>} - metadata of instagram post, like media url, caption, etc
 */
async function fetchPost(url, sessionId = '' ) {
  try {
    const regex = new RegExp(/^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com.*\/p\/)([\d\w\-_]+)(?:\/)?(\?.*)?$/gi);
    if (!regex.test(url)) return ({error: true, message: 'invalid url'});
    const media_id = /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com.*\/p\/)([\d\w\-_]+)(?:\/)?(\?.*)?$/gi.exec(url)[1];
    const fullURL = 'https://www.instagram.com/p/' + media_id + '/?__a=1';
    const opt = {
      headers: {
        "cache-control": "no-cache",
        'user-agent': "Instagram 10.8.0 Android (18/4.3; 320dpi; 720x1280; Xiaomi; HM 1SW; armani; qcom; en_US)",
        'cookie': `${sessionId}`,
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,pt;q=0.6,ru;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'pragma': 'no-cache',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1'
      }
    };
    const { data } = await axios.get(fullURL, opt);
    const metaData = data.graphql.shortcode_media;
    if (metaData.__typename == 'GraphVideo') {
      let data = {
        username: metaData.owner.username,
        name: metaData.owner.full_name,
        likes: metaData.edge_media_preview_like.count,
        caption: metaData.edge_media_to_caption.edges[0].node.text ? metaData.edge_media_to_caption.edges[0].node.text : '-',
        media_count: 1,
        links: [{
          type: 'video',
          url: metaData.video_url
        }]
      };
      return data;
    } else if (metaData.__typename == 'GraphImage') {
      let data = {
        username: metaData.owner.username,
        name: metaData.owner.full_name,
        likes: metaData.edge_media_preview_like.count,
        caption: metaData.edge_media_to_caption.edges[0].node.text ? metaData.edge_media_to_caption.edges[0].node.text : '-',
        media_count: 1,
        links: [{
          type: 'video',
          url: metaData.display_url
        }]
      };
      
      } else if (metaData.__typename == 'GraphSideCar') {
        let link = [];
        for (let i = 0; i < metaData.edge_sidecar_to_children.edges.length; i++) {
          if (metaData.edge_sidecar_to_children.edges[i].__typename == 'GraphVideo') {
            link.push({
              type: 'video',
              url: metaData.edge_sidecar_to_children.edges[i].node.display_url
            });
          } else {
            link.push({
              type: 'image',
              url: metaData.edge_sidecar_to_children.edges[i].node.video_url
            });
          }
        }
        let data = {
          username: metaData.owner.username,
          name: metaData.owner.full_name,
          likes: metaData.edge_media_preview_like.count,
          caption: metaData.edge_media_to_caption.edges[0].node.text ? metaData.edge_media_to_caption.edges[0].node.text : '-',
          media_count: metaData.edge_sidecar_to_children.edges.length,
          links: link
      };
      return data;
    }
  } catch (e) {
    return e;
  }
}

/**
 * @params {String} username
 * @params {String} sessionId can be blank
 * @returns{Promise<Object>}
 */
async function fetchUser(username, sessionId = '') {
  try {
    const opt = {
      headers: {
        "cache-control": "no-cache",
        'user-agent': "Instagram 10.8.0 Android (18/4.3; 320dpi; 720x1280; Xiaomi; HM 1SW; armani; qcom; en_US)",
        'cookie': `${sessionId}`,
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,pt;q=0.6,ru;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'pragma': 'no-cache',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1'
      }
    };
    const { data } = await axios.get('https://www.instagram.com/' + username + '/?__a=1', opt);
    const metaData = data.graphql.user;
    const final = {
      username: metaData.username,
      full_name: metaData.full_name,
      profile_id: metaData.id,
      biography: metaData.biography,
      followers: metaData.edge_follow.count,
      following: metaData.edge_followed_by.count,
      external_url: metaData.external_url,
      is_private: metaData.is_private,
      is_verified: metaData.is_verified,
      profile_pic_url_hd: metaData.profile_pic_url_hd,
      posts: metaData.edge_owner_to_timeline_media.edges.map(x => 'https://www.instagram.com/p/' + x.node.shortcode)
    };
    return final;
  } catch (e) {
    return e;
  }
}

module.exports = {
  fetchPost,
  fetchUser
};