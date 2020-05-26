const bcrypt = require("bcryptjs");

// user seed data with hashed password
exports.seed = async function (knex) {
  await knex("users").truncate();
  await knex("users").insert([
    { id: 1, email: "MelRack@gmail.com", password: bcrypt.hashSync("superhardpassword", 10) }

  ]);
};


