exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: "Melody@gmail.com", password: "melody" },
        { email: "Guillermo@gmail.com", password: "guillermo" },
        { email: "Natalia@gmail.com", password: "natalia" }


      ]);
    })
}
