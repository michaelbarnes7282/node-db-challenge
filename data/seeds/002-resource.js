
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'Michael', desc: 'coder boi'},
    {name: 'Will', desc: 'farmy boi'}
  ]);
};
