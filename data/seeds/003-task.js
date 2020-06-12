
exports.seed = function(knex) {
  return knex('tasks').insert([
    {project_id: 1, desc: 'finish MVP', notes: 'get it done'},
  ]);
};
