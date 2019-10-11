exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .unique('name')
            .notNullable();
        tbl.string('description', 128)
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 128)
            .unique('description')
            .notNullable();
        tbl.string('notes', 128);
        tbl.boolean('completed')
            .defaultTo("false")
            .notNullable();
        tbl.integer('project_id')
            .references('id')
            .inTable('projects');
        
    })
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed')
            .defaultTo("false")
            .notNullable();
        tbl.integer('task_id')
            .references('id')
            .inTable('tasks')
            .unique('task_id');
        tbl.integer('resource_id')
            .references('id')
            .inTable('resources');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    
    
};
