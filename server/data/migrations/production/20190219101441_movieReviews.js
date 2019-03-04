exports.up = function(knex, Promise) {
  return knex.schema.createTable('movieReviews', movieReviews => {
    movieReviews.increments('id'); // primary key called id
    movieReviews
      .integer('movieId') // movieId must be a non-negative number
      .notNullable(); // movieId field is required
    movieReviews
      .integer('userId')
      .unsigned() // userId must be a non-negative number
      .notNullable() // userId field is required
      .references('id') // reference primary key 'id' from users table
      .inTable('users') // reference users table
      .onDelete('cascade') // when you delete a row on the parent table, the related "children" rows on the other one are deleted.
      .index(); // adds an index to a table over the given columns
    movieReviews
      .string('reviewer')
      .notNullable() // name field is required
      // .foreign('reviewer') // adds a foreign key constraint to movieReviews table for reviewer column
      .references('email') // reference 'name' from users table
      .inTable('users') // reference users table
      .onDelete('cascade') // when you delete a row on the parent table, the related "children" rows on the other one are deleted.
      .index(); // adds an index to a table over the given columns
    movieReviews.text('textBody', 5000).notNullable(); // textBody field limited to 500 chars
    movieReviews.integer('rating'); // rating field
    movieReviews.timestamp('created_at').defaultTo(knex.fn.now()); // review creation date
    movieReviews.timestamp('updated_at').defaultTo(knex.fn.now()); // review last updated
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movieReviews');
};
