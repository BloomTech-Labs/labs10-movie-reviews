// NODE MODULES, DEPENDENCIES
// ==============================================
const express = require('express');

// SERVER GLOBAL MIDDLEWARE
// ==============================================
module.exports = server => {
  server.use(express.json());
};
