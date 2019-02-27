// ==============================================
// 🎥🎥 Movie Reviews Server 🍿🍿
// ==============================================
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
  if (req.user) {
    next();
  } else {
    res.send('You must login!');
  }
}

// configure routes to our server
server.get('/', (req, res) =>
  res.send({ Success: 'Sanity check is working...' })
);

server.get('/sanityauth', isUserAuthenticated, (req, res) => {
  res.send({ Success: 'You have the secret!' });
});

server.use('/auth', authRouter);
server.use('/api', userRouter);
server.use('/api', reviewsRouter);
server.use('/api', authReviewsRouter);
//isUserAuthenticated,--took out of line 41 for debugging purposes
server.use('/api', paymentRouter);

// start the server
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`);
});
