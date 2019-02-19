const router = require('express').Router();
const passport = require('passport');

// ==============================================
// Step #1 of login flow ➡️
// this route ('/auth/twitter') initiates the
// passport-twitter oauth flow. On the client-
// side, an <a> tag with an href that equals:
// href="http://localhost:5000/auth/twitter"
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
router.get(
  '/twitter/callback',
  passport.authenticate('twitter'),
  (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      res.redirect('https://movie-reviews.netlify.com');
    } else res.redirect('http://localhost:3000');
  }
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
  if (process.env.NODE_ENV === 'production') {
    res.redirect('https://movie-reviews.netlify.com');
  } else res.redirect('http://localhost:3000');
});

// ==============================================
// When the user logs in, the user session data,
// which is the full user object, will exist at
// this endpoint for the duration of the session.
// This is the endpoint the client-side will be
// checking in order to see if the user is
// logged in.
// ==============================================
router.get('/current_user', (req, res) => res.send(req.user));

module.exports = router;
