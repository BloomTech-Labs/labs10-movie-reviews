// DATABASE ACCESS
// ==============================================
const db = require('../../data/dbConfig.js');

// USER HELPERS
// ==============================================
module.exports = {
  get: function(id) {
    let query = db('users');
    if (id) query.where('id', Number(id)).first();
    return query;
  }
};
