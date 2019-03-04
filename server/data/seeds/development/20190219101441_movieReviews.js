
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movieReviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('movieReviews').insert([
        {id: 1, movieId: '333333', userId: 1, reviewer: "cmvannostrand@gmail.com", textBody: "I'm a review."}
      ]);
    });
};
