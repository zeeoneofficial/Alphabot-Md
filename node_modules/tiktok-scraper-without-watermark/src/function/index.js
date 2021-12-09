const { default: Axios } = require('axios')
const cheerio = require('cheerio')
const qs = require('qs')
const FormData = require('form-data')

function ssstik(url) {
     return new Promise((resolve, reject) => {
          var BASEurl = 'https://ssstik.io'
          Axios.request({
               url: BASEurl,
               method: 'get',
               headers: {
                    'cookie': '__cfduid=deb9cec7a40793d1abe009bb9961a92d41617497572; PHPSESSID=7ivsp9hc6askg1qocpi8lfpn7n; __cflb=02DiuEcwseaiqqyPC5q2cQqNGembhyZ5QaychuqFzev83; _ga=GA1.2.131585469.1617497575; _gid=GA1.2.1629908100.1617497575; _gat_UA-3524196-6=1',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"'
               }
          })
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const urlPost = $('form[data-hx-target="#target"]').attr('data-hx-post')
                    const tokenJSON = $('form[data-hx-target="#target"]').attr('include-vals')
                    const tt = tokenJSON.replace(/'/g, '').replace('tt:', '').split(',')[0]
                    const ts = tokenJSON.split('ts:')[1]
                    // console.log({ pst: urlPost, tt: tt, ts: ts })
                    var config = {
                         headers: {
                              'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                              'cookie': '__cfduid=deb9cec7a40793d1abe009bb9961a92d41617497572; PHPSESSID=7ivsp9hc6askg1qocpi8lfpn7n; __cflb=02DiuEcwseaiqqyPC5q2cQqNGembhyZ5QaychuqFzev83; _ga=GA1.2.131585469.1617497575; _gid=GA1.2.1629908100.1617497575; _gat_UA-3524196-6=1',
                              'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
                              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                         },
                         dataPost: {
                              'id': url,
                              'locale': 'en',
                              'tt': tt,
                              'ts': ts
                         }
                    }
                    Axios.post(BASEurl + urlPost, qs.stringify(config.dataPost), { headers: config.headers })
                         .then(({ data }) => {
                              // return console.log(data)
                              const $ = cheerio.load(data)
                              const result = {
                                   status: true,
                                   text: $('div > p').text(),
                                   videonowm: BASEurl + $('div > a.without_watermark').attr('href'),
                                   videonowm2: $('div > a.without_watermark_direct').attr('href'),
                                   music: $('div > a.music').attr('href')
                              }
                              if ($('div > a.without_watermark_direct').attr('href') !== undefined) {
                                   resolve(result)
                              } else {
                                   reject({ status: false, message: 'Tautan ini telah terunduh sebelumnya' })
                              }
                         })
                         .catch(reject)
               })
               .catch(reject)
     })
}


// function snaptik(url) {
//      return new Promise((resolve, reject) => {
//           Axios.get('https://tiktokdownload.online/', {
//                headers: {
//                     'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
//                     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36'
//                }
//           }).then(({ data }) => {
//                return console.log(data)
//                const fd = new FormData()
//                fd.append('url', url)
//                Axios({
//                     url: 'http://snaptik.app/action-2021.php?lang=ID',
//                     data: fd,
//                     headers: {
//                          'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
//                          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
//                          'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"'
//                     }
//                }).then(({ data }) => {
//                     return console.log(data)
//                     const $ = cheerio.load(data)
//                     let url = []
//                     $('div > a.abutton.is-success').get().map(rest => {
//                          url.push($(rest).attr('href'))
//                     })
//                     resolve({ status: true, result: url })
//                }).catch((e) => reject(e))
//           })
//      })
// }


function musicallydown(url) {
     return new Promise((resolve, reject) => {
          Axios.get('https://musicallydown.com', {
               headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
                    'cookie': '__cfduid=d1a03c762459f64f87734977f474142fe1618464905; session_data=ac6a59adeffddbf12d71d4d9e368fee9; _ga=GA1.2.1692872429.1618464910; _gid=GA1.2.371863113.1618464910; __atuvc=2%7C15; __atuvs=6077d08d902cbf1a001; __atssc=google%3B2',     
               }
          })
          .then(({ data }) => {
               // return console.log(data)
               const $ = cheerio.load(data)
               let keyInput = []
               $('form > div > div > input').get().map(rest => {
                    keyInput.push({
                         name: $(rest).attr('name'),
                         value: $(rest).attr('value')
                    })
               })
               const form = new FormData()
               form.append(keyInput[0].name, url)
               form.append(keyInput[1].name, keyInput[1].value)
               form.append(keyInput[2].name, keyInput[2].value)
               Axios({
                    method: 'POST',
                    url: 'https://musicallydown.com/download',
                    data: form,
                    headers: {
                         'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
                         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
                         'cookie': '__cfduid=d1a03c762459f64f87734977f474142fe1618464905; session_data=ac6a59adeffddbf12d71d4d9e368fee9; _ga=GA1.2.1692872429.1618464910; _gid=GA1.2.371863113.1618464910; __atuvc=2%7C15; __atuvs=6077d08d902cbf1a001; __atssc=google%3B2',
                         'origin': 'https://musicallydown.com',
                         'referer': 'https://musicallydown.com/'
                    }
               }).then(({ data }) => {
                    const result = {
                         status: true, 
                         message: 'Created By MRHRTZ',
                         title: $('div.row > div > h2 > b').text(),
                         preview: $('div.row > div > h1.cushead.white-text > video#video').attr('poster'), 
                         download: $('div.row > div > a:nth-child(4)'),
                         download_direct: $('div.row > div > a:nth-child(5)')
                    }
                    resolve(data)
               })
          })
     })
}

function keeptiktok(url) {
     return new Promise((resolve, reject) => {
          Axios.get('https://keeptiktok.com/?lang=ID', {
               headers: {
                    'Cookie': '__cfduid=d5db462e7efb9bb76bcf89765dbd896c91617891082; PHPSESSID=5a017bebc34ef170ddec3b7c71a0bbe8; _ga=GA1.2.1193000489.1617891094; _gid=GA1.2.408908588.1617891094; ads=ok; __atuvc=3|14; __atuvs=606f0f171d8ce8a1002; __atssc=google;2'
               }
          })
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    const token = $('input#token').attr('value')
                    const fd = new FormData()
                    fd.append('url', url)
                    fd.append('token', token)
                    Axios({
                         method: 'POST',
                         url: 'https://keeptiktok.com/index.php',
                         data: fd,
                         headers: {
                              'Content-Type': `multipart/form-data; boundary=${fd._boundary}`,
                              'Cookie': '__cfduid=d5db462e7efb9bb76bcf89765dbd896c91617891082; PHPSESSID=5a017bebc34ef170ddec3b7c71a0bbe8; _ga=GA1.2.1193000489.1617891094; _gid=GA1.2.408908588.1617891094; ads=ok; __atuvc=3|14; __atuvs=606f0f171d8ce8a1002; __atssc=google;2'
                         }
                    }).then(({ data }) => {
                         const $ = cheerio.load(data)
                         const text = $('div.download-info > div.video_des').text()
                         Axios.get('https://keeptiktok.com/dl.php', {
                              responseType: 'arraybuffer',
                              headers: {
                                   'referer': $('link[rel="canonical"]').attr('href'),
                                   'Cookie': '__cfduid=d5db462e7efb9bb76bcf89765dbd896c91617891082; PHPSESSID=5a017bebc34ef170ddec3b7c71a0bbe8; _ga=GA1.2.1193000489.1617891094; _gid=GA1.2.408908588.1617891094; ads=ok; __atuvc=3|14; __atuvs=606f0f171d8ce8a1002; __atssc=google;2'
                              }
                         }).then(({ data }) => {
                              const base64 = Buffer.from(data)
                              resolve({ status: true, result: { text: text, base64: base64.toString('base64') } })
                         })
                    }).catch((e) => reject({ status: false, message: e.message }))
               })
     })
}

module.exports.keeptiktok = keeptiktok
module.exports.musicallydown = musicallydown
module.exports.ssstik = ssstik