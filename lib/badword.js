const fs = require('fs')

exports.addBadword = function(kata, _dir){
    _dir.push(kata)
    fs.writeFileSync('./database/badword.json', JSON.stringify(_dir))
}

 exports.delBadword = function(kata, _dir){
    anu = _dir.indexOf(kata)
    _dir.splice(anu, 1)
    fs.writeFileSync('./database/badword.json', JSON.stringify(_dir))
}

 exports.isKasar = function(kata, _dir){
    let status = false
    if (_dir.includes(kata)){
        status = true
    }
    return status
}

 exports.addCountKasar = function(sender, _dir){
    var found = false;
    Object.keys(_dir).forEach((i) => {
        if(_dir[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _dir[found].count += 1;
        fs.writeFileSync('./database/senbadword.json',JSON.stringify(_dir));
    }
}

 exports.isCountKasar = function(sender, _dir){
    let found = false
    for (let i of _dir) {
        if (i.id === sender) {
            let counts = i.count
            if (counts >= 5) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false){
        const obj = { id: sender, count: 1 }
        _dir.push(obj)
        fs.writeFileSync('./database/senbadword.json', JSON.stringify(_dir))
        return false
    }
}

 exports.delCountKasar = function(sender, _dir){
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === sender) {
            _dir.splice(i, 1)
            fs.writeFileSync('./database/senbadword.json', JSON.stringify(_dir))
        }
    })
    return true
}