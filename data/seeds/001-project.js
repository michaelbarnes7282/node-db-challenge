
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('projects').insert([
    {name: 'db sprint', desc: 'finish this challenge'},
  ]);
};
