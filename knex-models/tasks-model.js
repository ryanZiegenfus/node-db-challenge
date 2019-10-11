const knexConfig = require('../knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

function find() {
    return db('tasks');
}

function add(task) {
    return db('tasks')
    .insert(task);
}


module.exports = {
    find,
    add,
}