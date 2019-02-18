// used to access our 'users' database
const db = require('../../data/dbConfig.js');

// USER HELPERS
// ==============================================
module.exports = {
  getUsers: function(id) {
    let query = db('users');
    if (id) query.where('id', Number(id)).first();
    return query;
  }
};
