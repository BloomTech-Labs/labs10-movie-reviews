// SERVER ROUTES
// ==============================================
const userRouter = require('./users/userRoutes');

module.exports = server => {
  server.get('/', (req, res) => {
    res.send({ Success: 'Sanity check is working...' });
  });
  server.use('/api', userRouter);
};
