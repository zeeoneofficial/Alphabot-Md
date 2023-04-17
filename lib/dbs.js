const fs = require('fs');


function UdhAdCoy(type, key, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].type === type && _db[x].key === key) {
            found = true
        }
    })
    return found
}


function ApusAhh(type, key, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].type === type && _db[x].key === key) {
            position = x
        }
    })

    if (position !== null) {
        _db.splice(position, 1)
    }
}

module.exports = {
    UdhAdCoy,
    ApusAhh
}
