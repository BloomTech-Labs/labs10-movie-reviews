// used to access our ‘users’ database
require('dotenv').config();
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;
const db = require('../../data/dbConfig.js');

// REVIEW HELPERS
// ==============================================
module.exports = {
  //GET Reviews
  getReviews: function(id) {
    let query = db('movieReviews');
    if (id) query.where('id', Number(id)).first();
    return query;
  },
  // GEt Reviews by user id
  getReviewsByUserId: function(userId) {
    return db('movieReviews').where('userId', Number(userId));
  },
  //POST Review
  insert: review => {
    console.log('insert: ', review);
    return db('movieReviews')
      .insert(review)
      .then(([id]) => module.exports.getReviews(id))
      .catch(err => {
        console.error(err);
      });
  },
  update: (id, editedReview) => {
    return (
      db('movieReviews')
        .where('id', id)
        .update(editedReview)
        // get the id if there are more than 0 records otherwise get 0
        .then(count => (count > 0 ? module.exports.getReviews(id) : 0))
    );
  },
  //DELETE Review
  remove: function(id) {
    if (debugging === true) console.log('DELETE Reviews Helper', '\nid:', id);
    return db('movieReviews')
      .where('id', id)
      .del();
  }
};
