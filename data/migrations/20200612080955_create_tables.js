
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
      tbl.increments()

      tbl.string('name', 128).notNullable().index()

      tbl.string('desc', 400)

      tbl.boolean('completed').notNullable().defaultTo(false)
  })
  .createTable('resources', tbl => {
      tbl.increments()

      tbl.string('name', 128).notNullable().unique().index()

      tbl.string('desc', 400)
  })
  .createTable('tasks', tbl => {
      tbl.increments()

      tbl.string('desc', 128).notNullable()

      tbl.string('notes', 400)

      tbl.boolean('completed').notNullable().defaultTo(false)

      // Foreign Keys
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable('resource_details', tbl => {
        tbl.increments()

        // Foreign Keys
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.id')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("resource_details")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
