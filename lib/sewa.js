const fs = require('fs')
const toMs = require('ms')

/**
 * Add Sewa group.
 * @param {String} gid 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addSewaGroup = (gid, expired, _dir) => {
    const obj = { id: gid, expired: Date.now() + toMs(expired), status: true }
    _dir.push(obj)
    fs.writeFileSync('./database/sewa.json', JSON.stringify(_dir, null, 2))
}

/**
 * Get sewa group position.
 * @param {String} gid 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaPosition = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

/**
 * Get sewa group expire.
 * @param {String} gid 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getSewaExpired = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

/**
 * Check group is sewa.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkSewaGroup = (gid, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            status = true
        }
    })
    return status
}

/**
 * Constantly checking sewa.
 * @param {object} WAConnection
 * @param {Object} _dir 
 */
const expiredCheck = (haruka, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Sewa expired: ${_dir[position].id}`)
            haruka.sendMessage(_dir[position].id, { text: `Masa sewa di grup ini telah habis, bot otomatis keluar!` })
            .then( res => {
              haruka.groupLeave(_dir[position].id)
              _dir.splice(position, 1)
              fs.writeFileSync('./database/sewa.json', JSON.stringify(_dir, null, 2))
            })
        }
    }, 1000)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllPremiumUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

module.exports = {
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup,
    getAllPremiumUser
}