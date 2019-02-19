const router = require('express').Router();

// ==============================================
// this JS file includes helpers that access our
// database accordingly (for example, getReviews
// requests all the reviews in the reviews database)
// ==============================================
const reviewsDb = require('./reviewsHelper.js');

// A GET request that returns all users from the database
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await reviewsDb.getReviews();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;