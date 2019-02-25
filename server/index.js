// ==============================================
// 🎥🎥 Movie Reviews Server 🍿🍿
// ==============================================
const server = require('express')();
const configureMiddleware = require('./api/configureMiddleware.js');
require('./services/passport.js');

const userRouter = require('./api/users/usersRouter');
const authRouter = require('./api/authentication/authRouter');
const reviewsRouter = require('./api/reviews/reviewsRouter');
const paymentRouter = require('./api/payments/paymentRouter');

const port = process.env.PORT || 5000;

// configure middlewares to our server
configureMiddleware(server);

// configure routes to our server
server.get('/', (req, res) =>
  res.send({ Success: 'Sanity check is working...' })
);

server.use('/auth', authRouter);
server.use('/api', userRouter);
server.use('/api', reviewsRouter);
server.use('/api', paymentRouter);

// start the server
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`);
});
