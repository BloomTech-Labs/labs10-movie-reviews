require('dotenv').config()
const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const usersDb = require('../api/authentication/authHelper.js');
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
//       consumerKey: process.env.TWITTER_CONSUMER_KEY,
//       consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
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
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true,
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
     async (token, tokenSecret, profile, done) => {
      const existingUser =  await usersDb.findUserByProfileId({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        photo: profile.photos[0].value
      });
      if (existingUser) {
        if (debugging === true) console.log('existingUser-passportjs:', existingUser);
        done(null, existingUser);
      } else {
        const user =  await usersDb.createUser({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          photo: profile.photos[0].value
        });
        if (debugging === true) console.log('user-passportjs:', user);
        done(null, user);
      }
    }
  )
);
