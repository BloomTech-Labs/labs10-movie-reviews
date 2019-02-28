const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const usersDb = require('../api/authentication/authHelper.js');
const keys = require('../config/keys.js');

// ==============================================

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
  done(null, user);
})

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
  done(null, user);
})

// passport-twitter strategy
// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: keys.twitterConsumerKey,
//       consumerSecret: keys.twitterConsumerSecret,
//       callbackURL: '/auth/twitter/callback',
//       proxy: true
//     },
//     async (token, tokenSecret, profile, done) => {
//       const existingUser = await usersDb.findUserByProfileId({
//         twitterId: profile.id
//       });
//       if (existingUser) {
//         console.log(existingUser);
//         done(null, existingUser);
//       } else {
//         const user = await usersDb.createUser({
//           twitterId: profile.id,
//           username: profile.username
//         });
//         console.log(user, "user from create");
//         done(null, user);
//       }
//     }
//   )
// );

// passport-google-strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
     async (token, tokenSecret, profile, done) => {
      const existingUser =  await usersDb.findUserByProfileId({
        googleId: profile.id,
        reviewer: profile.displayName,
        email: profile.emails[0].value,
        photo: profile.photos[0].value
      });
      if (existingUser) {
        console.log(existingUser);
        done(null, existingUser);
      } else {
        const user =  await usersDb.createUser({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value
        });
        done(null, user);
      }
    }
  )
);
