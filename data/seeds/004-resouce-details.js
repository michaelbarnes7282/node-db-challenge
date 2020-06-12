
exports.seed = function(knex) {
  return knex('resource_details').insert([
    {project_id: 1, resource_id: 1},
  ]);
};
