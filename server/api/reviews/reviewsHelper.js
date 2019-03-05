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
  //POST Review
  insert: function(review) {
    return db('movieReviews')
      .insert(review)
      .then(ids => {
        if (debugging === true) console.log('POST Reviews Helper', '\nids:', ids);
        ({ id: ids[0] });
      })

      .catch(err => {
        console.error(err);
      });
  },
  //PUT Review
  update: function(id, movieReview) {
    if (debugging === true) console.log('PUT Reviews Helper', '\nid:', id, 'movieReview:', movieReview);
    return db('movieReviews')
      .where('id', id)
      .update(movieReview);
  },
  //DELETE Review
  remove: function(id) {
    if (debugging === true) console.log('DELETE Reviews Helper', '\nid:', id)
    return db('movieReviews')
      .where('id', id)
      .del();
  }
};
