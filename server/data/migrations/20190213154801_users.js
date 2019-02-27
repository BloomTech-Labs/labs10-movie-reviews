exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments(); // primary key called id
    users.string('twitterId', 25).unique(); // official twitterId of Twitter user
    users.string('googleId', 50).unique();//official googleId of google user
    users.string('stripeId', 50).unique();//official stripeId of stripe user
    users.string('username', 20).unique(); // username field
    users.string('name', 100); // name field
    users.string('email', 254); // email field
    users.boolean('premium_user').defaultTo(false);
    users.string('photo',200);
    users.timestamp('created_at').defaultTo(knex.fn.now()); // user creation date
    users.timestamp('updated_at').defaultTo(knex.fn.now()); // last updated
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
