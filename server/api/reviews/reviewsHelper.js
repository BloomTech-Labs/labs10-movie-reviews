// used to access our ‘users’ database
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
        .then(ids => ({ id: ids[0] }));
    },
    //PUT Review
    update: function(id, movieReview) {
        return db('movieReviews')
            .where('id', id)
            .update(movieReview);
        },
    //DELETE Review
    remove: function(id) {
        return db('movieReviews')
            .where('id', id)
            .del();
    }
};
