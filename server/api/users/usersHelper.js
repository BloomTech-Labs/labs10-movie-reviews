// used to access our 'users' database
require('dotenv').config();
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;
const db = require('../../data/dbConfig.js');

// USER HELPERS
// ==============================================
module.exports = {
  getUsers: function() {
    return db('users');
  },
  getUsersById: function(id) {
    return db('users').where({ id: id });
  },
  insert: function(user) {
    return db('users').insert(user);
  },
  update: function(id, user) {
    // if (debugging)
    //   console.log('PUT Users Helper', '\nid:', id, 'user:', user);
    return db('users')
      .where('id', id)
      .update(user);
  },
  // Delete User
  remove: function(id) {
    // if (debugging) console.log('DELETE User Helper', '\nid:', id);
    return db('users')
      .where('id', id)
      .del();
  }
};
