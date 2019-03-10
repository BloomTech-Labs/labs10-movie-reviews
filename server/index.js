// ==============================================
// 🎥🎥 Movie Reviews Server 🍿🍿
// ==============================================
require('dotenv').config();
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;
const express = require('express');
const server = express();
const configureMiddleware = require('./api/configureMiddleware.js');
require('./services/passport.js');

const userRouter = require('./api/users/usersRouter');
const authRouter = require('./api/authentication/authRouter');
const authReviewsRouter = require('./api/reviews/authReviewsRouter');
const reviewsRouter = require('./api/reviews/reviewsRouter');
const paymentRouter = require('./api/payments/paymentRouter');

const port = process.env.PORT || 5000;

// configure middlewares to our server
configureMiddleware(server);

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  if (debugging === true)
    console.log('isAuthenticated:', req.isAuthenticated(), {
      withCredentials: true
    });
  if ((req.isAuthenticated(), { withCredentials: true })) {
    return next();
  } else {
    res.redirect('/');
  }
}

// configure routes to our server
server.get('/', (req, res) =>
  res.status(200).send({ Success: 'Sanity check is working...' })
);

server.get('/sanityauth', isUserAuthenticated, (req, res) => {
  res.status(200).send({ Success: 'You have the secret!' });
});

server.use('/auth', authRouter);
server.use('/api', userRouter);
server.use('/api', reviewsRouter);
server.use('/api', isUserAuthenticated, authReviewsRouter);
server.use('/api', paymentRouter);

// start the server
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`);
});
