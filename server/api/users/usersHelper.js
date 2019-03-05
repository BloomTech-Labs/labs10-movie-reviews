// used to access our 'users' database
require('dotenv').config();
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;
const db = require('../../data/dbConfig.js');

// USER HELPERS
// ==============================================
module.exports = {
  getUsers: function(id) {
    let query = db('users');
    if (id) return query.where('id', id).first();
    if (debugging === true) console.log('GET Users Helper', '\nid:', id);
    return query;
  },
  insert: function(user) {
    return db('users')
      .insert(user)
      .then(ids => {
        if (debugging === true) console.log('POST Users Helper', '\nids:', ids);
        ({ id: ids[0] });
      })
      .catch(err => {
        console.error(err);
      });
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
