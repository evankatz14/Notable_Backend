
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('physicians').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('physicians').insert([
        {id: 1, name: 'Hibbert, Julius'},
        {id: 2, name: 'Kreiger, Algernop'},
        {id: 3, name: 'Riviera, Nick'}
      ]);
    });
};
