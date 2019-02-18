const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('../config/keys');

// list of middlewares configured to our Express
// server (the same Express server from index.js)
module.exports = server => {
  server.use(express.json());
  server.use(
    cookieSession({
      name: 'movie-reviews',
      keys: [keys.cookieKey],
      maxAge: 24 * 60 * 60 * 1000
    })
  );
  server.use(passport.initialize());
  server.use(passport.session());
};
