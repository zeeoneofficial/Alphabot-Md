const fs = require('fs');

const isSetProses = (groupID, _db) => {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

const changeSetProses = (teks, groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].text = teks
        fs.writeFileSync('./database/set_proses.json', JSON.stringify(_db, null, 3))
    }
}

const addSetProses = (teks, groupID, _db) => {
    const obj_add = {
        id: groupID,
        text: teks
    }
    _db.push(obj_add)
    fs.writeFileSync('./database/set_proses.json', JSON.stringify(_db, null, 3))
}

const removeSetProses = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/set_proses.json', JSON.stringify(_db, null, 3))
    }
}

const getTextSetProses = (groupID, _db) => {
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
//set promote
const isSetPromote = (groupID, _db) => {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

const changeSetPromote = (teks, groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].text = teks
        fs.writeFileSync('./database/set_promote.json', JSON.stringify(_db, null, 3))
    }
}

const addSetPromote = (teks, groupID, _db) => {
    const obj_add = {
        id: groupID,
        text: teks
    }
    _db.push(obj_add)
    fs.writeFileSync('./database/set_promote.json', JSON.stringify(_db, null, 3))
}

const removeSetPromote = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/set_promote.json', JSON.stringify(_db, null, 3))
    }
}

const getTextSetPromote = (groupID, _db) => {
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

//set demote
const isSetDemote = (groupID, _db) => {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

const changeSetDemote = (teks, groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].text = teks
        fs.writeFileSync('./database/set_demote.json', JSON.stringify(_db, null, 3))
    }
}

const addSetDemote = (teks, groupID, _db) => {
    const obj_add = {
        id: groupID,
        text: teks
    }
    _db.push(obj_add)
    fs.writeFileSync('./database/set_demote.json', JSON.stringify(_db, null, 3))
}

const removeSetDemote = (groupID, _db) => {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            position = x
        }
    })
    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/set_demote.json', JSON.stringify(_db, null, 3))
    }
}

const getTextSetDemote = (groupID, _db) => {
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
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
    isSetPromote,
    addSetPromote,
    removeSetPromote,
    changeSetPromote,
    getTextSetPromote,    
    isSetDemote,
    addSetDemote,
    removeSetDemote,
    changeSetDemote,
    getTextSetDemote
}