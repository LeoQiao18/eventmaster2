const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // already have a record of this user
        // update the fields of the user
        existingUser.displayName = profile.displayName;
        existingUser.name = {
          familyName: profile.name.familyName,
          givenName: profile.name.givenName
        };
        existingUser.email = profile.emails[0].value;
        existingUser.image = profile.photos[0].value;
        // save the user document to database
        const updatedUser = await existingUser.save();
        // pass the user data to passport
        done(null, updatedUser);
      } else {
        // it is a new google
        // create a new user document and save it to database
        const newUser = await new User({
          googleId: profile.id,
          displayName: profile.displayName,
          name: {
            familyName: profile.name.familyName,
            givenName: profile.name.givenName
          },
          email: profile.emails[0].value,
          image: profile.photos[0].value
        }).save();
        // pass the user document to passport
        done(null, newUser);
      }
    }
  )
);
