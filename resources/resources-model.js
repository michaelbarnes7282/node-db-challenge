const db = require('../data/db-config.js');

function get() {
    return db('resources')
}

function add(resourceData) {
    return db('resources')
        .insert(resourceData)
}

module.exports = {
    get,
    add
}