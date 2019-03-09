const clientURL = require('../../services/config');

require('dotenv').config();
const router = require('express').Router();
const passport = require('passport');
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;

// ==============================================
// Step #1 of login flow ➡️
// this route ('/auth/twitter') initiates the
// passport-twitter oauth flow. On the client-
// side, an <a> tag with an href that equals:
// href={`${twitterLogin}`}
// (with our production origin as well) will
// initiate the passport-twitter OAuth flow.
// ==============================================
router.get('/twitter', passport.authenticate('twitter'));

// ==============================================
// Step #2 of login flow ➡️
// If step #1 is successful (if the user has
// accepted the Twitter prompt), the user will be
// redirected back to the React client.
// ==============================================
router.get('/twitter/callback', passport.authenticate('twitter'), (req, res) =>
  res.redirect(clientURL)
);

// ==============================================
// This route ('auth/logout'), which be on an <a>
// tag (logout button) on the client-side, will log
// the user out, remove the user session data on
// the endpoint ('auth/current_user'), then redirect
// the user back to the root client page.
// ==============================================
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(clientURL);
});

// ==============================================
// When the user logs in, the user session data,
// which is the full user object, will exist at
// this endpoint for the duration of the session.
// This is the endpoint the client-side will be
// checking in order to see if the user is
// logged in.
// ==============================================
router.get('/current_user', (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  }
});

// passport.authenticate middleware is used here to authenticate the request
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'] // Scope is Used to specify the required data
  })
);

// The middleware receives the data from Google and runs the function on Strategy config
router.get('/google/callback', passport.authenticate('google'), (req, res) =>
  res.redirect(clientURL)
);

module.exports = router;
