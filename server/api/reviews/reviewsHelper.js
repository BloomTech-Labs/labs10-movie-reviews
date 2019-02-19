// used to access our ‘users’ database
const db = require('../../data/dbConfig.js');

// REVIEW HELPERS
// ==============================================
module.exports = {
  getReviews: function(id) {
    let query = db('movieReviews');
    if (id) query.where('id', Number(id)).first();
    return query;
  },
  insert: function(review) {
    return db('movieReviews')
      .insert(review)
      .then(ids => ({ id: ids[0] }));
  }
};
