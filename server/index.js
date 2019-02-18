// ==============================================
// SERVER ARCHITECTURE
// ==============================================
const server = require('express')();

const port = process.env.PORT || 5000;

// GLOBAL MIDDLEWARE & ROUTE INSTANTIATION
// ==============================================
require('./api/middleware')(server);
require('./api/routes')(server);

// STARTING THE SERVER
// ==============================================
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`);
});
