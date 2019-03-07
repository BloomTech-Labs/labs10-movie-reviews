require('dotenv').config();
const router = require('express').Router();
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;

// ==============================================
// this JS file includes helpers that access our
// database accordingly (for example, getReviews
// requests all the reviews in the reviews database)
// ==============================================
const reviewsDb = require('./reviewsHelper.js');

// GET request that returns all reviews from the database
router.get('/reviews', async (req, res) => {
  // get all reviews
  const allReviews = await reviewsDb.getReviews();
  try {
    // return all reviews to the caller
    return res.status(200).json(allReviews);
  } catch (error) {
    // catch any error left and send it to the caller
    return res.status(500).json({
      message: 'the reviews could not be retrieved',
      error: error.message
    });
  }
});

// GET request that gets a review by id
router.get('/reviews/:id', async (req, res) => {
  const { id } = req.params;

  // get the review at the id provided in the params
  const review = await reviewsDb.getReviews(id);
  try {
    // test that it returns a review at that id and if not return a 404
    if (!review) {
      return res
        .status(404)
        .json({ message: `the review does not exist at id of ${id}` });
    }
    // otherwise return the 200 success
    return res.status(200).json(review);
  } catch (error) {
    // catch any other error and return a 500
    return res.status(500).json({
      message: 'the review could not be retrieved',
      error: error.message
    });
  }
});

module.exports = router;
