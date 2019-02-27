const router = require('express').Router();

// ==============================================
// this JS file includes helpers that access our
// database accordingly (for example, getReviews
// requests all the reviews in the reviews database)
// ==============================================
const reviewsDb = require('./reviewsHelper.js');

// GET request that returns all reviews from the database
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await reviewsDb.getReviews();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET request that gets a review by id
router.get('/reviews/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const review = await reviewsDb.getReviews(id);
    review
      ? res.status(200).json(review)
      : res
          .status(404)
          .json({ error: 'The review with the specified ID does not exist' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
