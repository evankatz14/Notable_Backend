
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([
        {id: 1, physician_id: 2, name: 'Sterling Archer', time: "8:00AM", kind: "New Patient"},
        {id: 2, physician_id: 2, name: 'Cyril Figis', time: "8:30AM", kind: "Follow-up"},
        {id: 3, physician_id: 2, name: 'Ray Gilette', time: "9:00AM", kind: "Follow-up"},
        {id: 4, physician_id: 2, name: 'Lana Kane', time: "9:30AM", kind: "New Patient"},
        {id: 5, physician_id: 2, name: 'Pam Poovey', time: "10:00AM", kind: "New Patient"},
        {id: 6, physician_id: 3, name: 'Cheryl Tunt', time: "10:00AM", kind: "New Patient"}
      ]);
    });
};
