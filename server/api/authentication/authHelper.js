// used to access our 'users' database
const db = require('../../data/dbConfig.js');

// AUTH HELPERS
// ==============================================
module.exports = {
  findUserById: function(id) {
    return db('users')
      .where('id', Number(id))
      .first();
  },
  findUserByProfileId: function(user) {
    return db('users')
      .where(user)
      .first();
  },
  createUser: function(user) {
    return db('users')
      .insert(user)
      .then(ids => ({ id: ids[0] }));
  }
};
