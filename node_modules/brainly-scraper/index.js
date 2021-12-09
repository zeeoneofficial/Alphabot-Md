/**
 * Defri Indra Mahardika
 * Updated on 4 April 2020
 * 
 */
'use strict';
const Base = require('./src/brainly.js');

const Brainly = async (query, count = 5) => {
    let response = await Base(query, count).catch(error => {
        return {
            'success': false,
            'message': error,
        };
    });

    return response;
};

module.exports = Brainly;