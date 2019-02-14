// NODE MODULES, DEPENDENCIES
// ==============================================
const express = require('express');

// WEB API GLOBAL MIDDLEWARE
// ==============================================
module.exports = server => {
  server.use(express.json());
};
