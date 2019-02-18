const express = require('express');

// list of middlewares configured to our Express
// server (the same Express server from index.js)
module.exports = server => {
  server.use(express.json());
};
