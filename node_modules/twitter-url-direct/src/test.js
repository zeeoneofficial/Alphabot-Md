const twitterGetUrl = require("./index")

async function test(url){
    let result = await twitterGetUrl(url)
    return result
}

//Test Image URL
test("https://twitter.com/0XMURADX0/status/1367883669105479683").then(result=>{
    console.log({
        test: "Image Test",
        status: "success",
        result
    })
}).catch((err)=>{
    console.log({
        test: "Image Test",
        status: "error",
        result: err.message
    })
})

//Test Video URL
test("https://twitter.com/OnePiece_Screen/status/1363152365898117125").then(result=>{
    console.dir({
        test: "Video Test",
        status: "success",
        result
    },{depth: null})
}).catch((err)=>{
    console.log({
        test: "Video Test",
        status: "error",
        result: err.message
    })
})

//Test GIF URL
test("https://twitter.com/0XMURADX0/status/1317591100480258048").then(result=>{
    console.dir({
        test: "GIF Test",
        status: "success",
        result
    }, {depth: null})
}).catch((err)=>{
    console.log({
        test: "GIF Test",
        status: "error",
        result: err.message
    })
})

//Test NOT FOUND URL
test("https://twitter.com/_nbkrd/status/1368315217756909575").then(result=>{
    console.log({
        test: "Not Found Test",
        status: "success",
        result
    })
}).catch((err)=>{
    console.log({
        test: "Not Found Test",
        status: "error",
        result: err.message
    })
})