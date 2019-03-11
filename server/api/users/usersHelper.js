// used to access our 'users' database
require('dotenv').config();
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;
const db = require('../../data/dbConfig.js');

// USER HELPERS
// ==============================================
module.exports = {
  getUsers: function(id) {
    return db('users');
  },
  getUsersById: function(id) {
    return db('users').where({ id: id });
  },
  // get method
  get: credentials => {
    return db('users')
      .where({ email: credentials.email })
      .first();
  },
  insert: function(user) {
    return db('users').insert(user);
    // .then(ids => {
    //   if (debugging === true) console.log('POST Users Helper', '\nids:', ids);
    //   ({ id: ids[0] });
    // })
    // .catch(err => {
    //   console.error(err);
    // });
  },
  // getReviewOrder method
  getReviewOrder: id => {
    return db('users')
      .where('id', id)
      .select('reviewOrder')
      .first();
  },
  // updateReviewOrder method
  updateReviewOrder: (id, updatedReviewOrder) => {
    return db('users')
      .where('id', id)
      .update(updatedReviewOrder);
    // .then(count => (count > 0 ? module.exports.getReviewOrder(id) : 0));
  },
  update: function(id, user) {
    if (debugging === true)
      console.log('PUT Users Helper', '\nid:', id, 'user:', user);
    return db('users')
      .where('id', id)
      .update(user);
  },
  // Delete User
  remove: function(id) {
    if (debugging === true) console.log('DELETE User Helper', '\nid:', id);
    return db('users')
      .where('id', id)
      .del();
  }
};
