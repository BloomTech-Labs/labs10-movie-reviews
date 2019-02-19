const router = require('express').Router();

// ==============================================
// this JS file includes helpers that access our
// database accordingly (for example, getUsers
// requests all the users in the users database)
// ==============================================
const usersDb = require('./usersHelper.js');

// A GET request that returns all users from the database
router.get('/users', async (req, res) => {
  try {
    const users = await usersDb.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/users', async (req, res) => {
  console.log('req body: ', req.body);
  if (req.body.name && req.body.username && req.body.email) {
    try {
      await usersDb.insert(req.body);
      res.status(201).json({ message: 'User successfully added!' });
    } catch (err) {
      res.status(500).json(err);
    }
  } else
    res
      .status(400)
      .json({ error: 'Please provide a name, username & email for the user.' });
});

router.put('/users/:id', async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
if (req.body.name && req.body.username && req.body.email) {
    try {
      const count = await usersDb
        .where({id: id})
        .update(changes)
        //count is the number of records updated
        .then(count => {
          res.status(200).json({Success: `${count} record has been updated`});
        })
        .catch(err => {
          res.status(400).json({Error: `${id} could not be found in database`})
        });
    } catch (err) {
      res.status(500).json(err);
    }
  } else res.status(400).json({ Error: 'Please provide a name, username & email for the user profile.' });
});

module.exports = router;
