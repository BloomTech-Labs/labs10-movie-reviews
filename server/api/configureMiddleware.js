require('dotenv').config();
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');

const corsOptions = {
  credentials: true,
  origin: [
    // 'http://localhost:3000',
    // 'https://cineview.netlify.com',
    'https://stupefied-northcutt-418a4d.netlify.com'
  ]
};

// list of middlewares configured to our Express
// server (the same Express server from index.js)
module.exports = server => {
  server.use(express.json());
  server.use(
    cookieSession({
      name: 'cineview',
      keys: [process.env.COOKIE_KEY],
      maxAge: 24 * 60 * 60 * 1000
    })
  );
  server.use(passport.initialize());
  server.use(passport.session());
  server.use(cors(corsOptions));
};
