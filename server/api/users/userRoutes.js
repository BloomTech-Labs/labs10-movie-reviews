/*== USER API ============================================

GET -> /api/users
  Get the list of users.

*/

// EXPRESS ROUTER, DEPENDENCIES & MIDDLEWARE
// ==============================================
const router = require('express').Router();

const userDb = require('./userHelpers.js');

// USER ROUTES
// ==============================================
router.get('./users', getUsers);

// CALLBACK FUNCTIONS
// ==============================================
async function getUsers(_, res) {
  try {
    const users = await userDb.get();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = router;
