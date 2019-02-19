// used to access our 'users' database
const db = require('../../data/dbConfig.js');

// USER HELPERS
// ==============================================
module.exports = {
  getUsers: function(id) {
    let query = db('users');
    if (id) query.where('id', Number(id)).first();
    return query;
  },
  insert: function(user) {
    return db('users')
      .insert(user)
      .then(ids => ({ id: ids[0] }));
  },
  // Delete User
  remove: function(id) {
    return db('users')
      .where('id', id)
      .del();
  }
};
