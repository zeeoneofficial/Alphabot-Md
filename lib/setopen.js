const fs = require('fs');

const isSetOpen = (groupID, _db) => {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

const changeSetOpen = (teks, groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].text = teks
        fs.writeFileSync('./database/set_open.json', JSON.stringify(_db, null, 3))
    }
}

const addSetOpen = (teks, groupID, _db) => {
    const obj_add = {
        id: groupID,
        text: teks
    }
    _db.push(obj_add)
    fs.writeFileSync('./database/set_open.json', JSON.stringify(_db, null, 3))
}

const removeSetOpen = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/set_open.json', JSON.stringify(_db, null, 3))
    }
}

const getTextSetOpen = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        return _db[position].text
    }
}

module.exports = {
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen
}