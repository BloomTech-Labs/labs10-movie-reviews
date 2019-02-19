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

router.post('/reviews', async (req, res) => {
  if (req.body.twitterhandle && req.body.textBody && req.body.rating) {
    try {
      await reviewsDb.insert(req.body);
      res.status(201).json({ message: 'Review successfully added!' });
    } catch (err) {
      res.status(500).json(err);
    }
  } else
    res.status(400).json({
      error: 'Please provide a username, rating and textBody for your review.'
    });
});

module.exports = router;
