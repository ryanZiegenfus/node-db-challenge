const knexConfig = require('../knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

function find() {
    return db('projects')
}

function add(project) {
    return db('projects')
    .insert(project);
}


module.exports = {
    find,
    add,
}