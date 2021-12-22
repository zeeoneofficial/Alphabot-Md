const axios = require("axios"), cheerio = require("cheerio"),qs = require('qs')
module.exports = twitterGetUrl = (url_media) =>{
    return new Promise((resolve,reject)=>{
        let twitter_url_array = url_media.split("/")
        twitter_url_array[5] = twitter_url_array[5].split("?")[0]
        url_media = twitter_url_array.join("/")
        var url = url_media.replace("twitter", "ssstwitter")
        const requestBody = {
            id: url_media,
            tt: "48277062996429953dc378d8675febbc",
            ts: 1614856639
        }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post(url, qs.stringify(requestBody), config).then(result => {
            let $ = cheerio.load(result.data), videoUrl = [], imageUrl = null, response = {}
            //GETTING VIDEO/GIF LINKS
            $('div.result_overlay > a').each((i, element) => {
                let cheerioElement = $(element)
                let videoDimensions = cheerioElement.attr("href").split("/")[7]
                let videoWidth = (videoDimensions != undefined) ? videoDimensions.split("x")[0] : null
                let videoHeight = (videoDimensions != undefined) ? videoDimensions.split("x")[1] : null
                if(videoDimensions == undefined){
                    videoUrl.push({
                        width: null,
                        height: null,
                        dimensions : null,
                        url: cheerioElement.attr("href")
                    })
                } else {
                    videoUrl.push({
                        width: videoWidth,
                        height: videoHeight,
                        dimension: videoDimensions,
                        url: cheerioElement.attr("href")
                    })
                }
            })
            //GETTING IMAGE LINKS
            if(videoUrl.length == 0){
                $('div.result_overlay > img').each((i, element) => {
                    let cheerioElement = $(element)
                    imageUrl = (cheerioElement.attr("src") != "/images/no_thumb.png") ? cheerioElement.attr("src") : null
                })
            }
            //RESULTS OUTPUT
            if(imageUrl == null && videoUrl.length == 0){
                response = {
                    found: false
                }
            } else if(imageUrl == null){
                response = {
                    found: true,
                    type: "video",
                    dimensionsAvailable: videoUrl.length,
                    download: videoUrl
                }
            } else if (videoUrl.length == 0){
                response = {
                    found: true,
                    type: "image",
                    download: imageUrl
                }
            }
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}