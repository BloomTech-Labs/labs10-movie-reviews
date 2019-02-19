exports.up = function(knex, Promise) {
  return knex.schema.createTable('movieReviews', movieReviews => {
    movieReviews.increments('id'); // primary key called id
    movieReviews
      .integer('userId')
      .unsigned() // userId must be a non-negative number
      .notNullable() // userId field is required
      .references('id') // reference primary key 'id' from users table
      .inTable('users') // reference users table
      .onDelete('cascade') // when you delete a row on the parent table, the related "children" rows on the other one are deleted.
      .index(); // adds an index to a table over the given columns
    movieReviews
      .string('twitterhandle')
      .notNullable()
      .references('username')
      .inTable('users')
      .onDelete('cascade')
      .index();
    movieReviews.text('textBody', 5000).notNullable(); // textBody field limited to 500 chars
    movieReviews.integer('rating'); // rating field
    movieReviews.timestamp('created_at').defaultTo(knex.fn.now()); // review creation date
    movieReviews.timestamp('updated_at').defaultTo(knex.fn.now()); // review last updated
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movieReviews');
};
