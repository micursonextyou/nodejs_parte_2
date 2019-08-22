var passport = require('passport');
var Usuario = require('../models/usuarios');

passport.serializeUser(function(user, done) {
    if (user) {
        done(null, done);
    }
});

passport.deserializeUser(function(user, done) {
    Usuario.findOne({ _id: user.id }).exec(function(err, user) {
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
});
module.exports = passport;