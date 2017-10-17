var GoogleStrategy = require('passport-google-oauth20').Strategy;

// load up the user model
var User = require('../models/user');

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
            clientID: '304419089188-732c3tuv2o9oeh93t575h4h6s5ai40qn.apps.googleusercontent.com',
            clientSecret: 'oQMqrPu5gksn5FM0stf5g_ub',
            callbackURL: "http://localhost:3001/auth/google/callback"
        },
        function(accessToken, refreshToken, profile, cb) {
            User.findOrCreate({ id: profile.id, name: profile.displayName })
                .then(() => {
                    cb(null, { id: profile.id, name: profile.displayName });
                })
                .catch(() => {
                    cb(null, { id: profile.id, name: profile.displayName });
                });
        }
    ));

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id)
            .then((user) => done(null, user));

    });

};

