const knexConfig = require('../knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

function find() {
    return db('resources');
}

function add(resource) {
    return db('resources')
    .insert(resource);
}


module.exports = {
    find,
    add,
}