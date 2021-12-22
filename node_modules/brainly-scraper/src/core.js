/**
 * Check variable value
 * @param {*} variable 
 */
const _required = (variable) => {
    if (variable === "" || variable === undefined) {
        throw ("Param cant be blank");
    }
}

/**
 * replace all html syntax
 * @param {String} data
 * @return {String}
 */
const clean = (data) => {
    let regex = /(<([^>]+)>)/ig;
    data = data.replace(/(<br?\s?\/>)/ig, ' \n');
    return data.replace(regex, '');
};


exports._required = _required;
exports.clean = clean;