const router = require('express').Router();

// ==============================================
// this JS file includes helpers that access our
// database accordingly (for example, getReviews
// requests all the reviews in the reviews database)
// ==============================================
const reviewsDb = require('./reviewsHelper.js');

//POST review
router.post('/reviews', async (req, res) => {
  if (req.body.reviewer && req.body.textBody && req.body.rating) {
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

//PUT review
router.put('/reviews/:id', async (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  if (req.body.reviewer && req.body.textBody && req.body.rating) {
    try {
      const count = await reviewsDb.update(id, changes);
      //count is the number of records updated
      if (count) {
        const review = await reviewsDb.get(id);
        res.status(200).json(review);
      } else
        res.status(404).json({ Error: `Review with ID ${id} does not exist.` });
    } catch (err) {
      res.status(500).json(err);
    }
  } else
    res.status(400).json({
      Error: 'Please provide a name, textBody & rating to edit review.'
    });
});

//DELETE request that deletes a review
router.delete('/reviews/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const count = await reviewsDb.remove(id);

    count
      ? res
          .status(200)
          .json({ message: `Review ${id} was successfully deleted.` })
      : res
          .status(404)
          .json({ message: `ID: ${id} does not exist in our database` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
