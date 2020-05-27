exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task: "dishes", description: "unload the dishwasher", due_date: "06/01/2020", completed: false, user_id: 1 },
        { task: "Walmart", description: "buy whole milk", due_date: "06/01/2020", completed: false, user_id: 2 },
        { task: "Target", description: "buy new clothes", due_date: "06/01/2020", completed: false, user_id: 2 }

        // { task: "fold laundry", description: "fold the darks", due_date: 2020 - 06 - 01, completed: false }, { task: "clean litter box", description: "it's so dirty", due_date: 2020 - 06 - 01, completed: false }
      ]);
    });
};