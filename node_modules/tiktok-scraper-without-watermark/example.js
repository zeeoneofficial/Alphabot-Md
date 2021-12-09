const tiktok = require('.')
const url = 'https://www.tiktok.com/@youneszarou/video/6942436555692805381'


tiktok.ssstik(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))


// tiktok.musicallydown(url)
//      .then(result => {
//           console.log(result)
//      })
//      .catch(e => console.log(e))


// tiktok.keeptiktok(url)
//      .then(result => {
//           console.log(result)
//      })
//      .catch(e => console.log(e))