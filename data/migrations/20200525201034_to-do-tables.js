exports.up = function (knex) {
    return knex.schema
        .createTable("users", users => {
            users.increments();
            users
                .string("email")
                .notNullable()
                .unique();
            users
                .string("password")
                .notNullable()
                .unique();
        })

        .createTable("profiles", profiles => {
            profiles.increments();
            profiles.string("first_name");
            profiles.string("last_name");
            profiles.integer("age");
            profiles.string("occupation");
            profiles
                .integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })

        .createTable("tasks", tasks => {
            tasks.increments();
            tasks.string("task").notNullable();
            tasks.string("description");
            tasks.bigInteger("due_date");
            tasks.bigInteger("timestamp");
            tasks.boolean("completed").defaultTo("false");
            tasks
                .integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })

        .createTable("tags", tags => {
            tags.increments();
            tags
                .string("color")
                .notNullable()
                .unique();
            tags
                .string("tag")
                .notNullable()
                .unique();
        })




};

exports.down = function (knex) {
    return knex.schema

        .dropTableIfExists("tags")
        .dropTableIfExists("tasks")
        .dropTableIfExists("profiles")
        .dropTableIfExists("users");
};
