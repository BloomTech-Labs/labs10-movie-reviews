const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

const usersDb = require('../api/authentication/authHelper.js');
const keys = require('../config/keys.js');

// passport-twitter strategy
// ==============================================
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  const user = await usersDb.findUserById(id);
  done(null, user);
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterConsumerKey,
      consumerSecret: keys.twitterConsumerSecret,
      callbackURL: '/auth/twitter/callback',
      proxy: true
    },
    async (token, tokenSecret, profile, done) => {
      const existingUser = await usersDb.findUserByTwitterId({
        twitterId: profile.id
      });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await usersDb.createUser({ twitterId: profile.id });
        done(null, user);
      }
    }
  )
);
