// ==============================================
// SERVER ARCHITECTURE
// ==============================================
const server = require('express')();
const port = process.env.PORT || 5000;

// MIDDLEWARE & ROUTES
// ==============================================
require('./api/middleware')(server);
require('./api/routes')(server);

// START THE SERVER
// ==============================================
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`);
});
