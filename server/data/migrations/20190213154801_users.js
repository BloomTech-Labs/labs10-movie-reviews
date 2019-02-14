exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments(); // primary key called id
    users
      .string('username', 20)
      .notNullable()
      .unique(); // username field
    users.string('name', 100).notNullable(); // name field
    users.string('email', 254).notNullable(); // email field
    users.timestamp('created_at').defaultTo(knex.fn.now()); // user creation date
    users.timestamp('updated_at').defaultTo(knex.fn.now()); // last updated
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
