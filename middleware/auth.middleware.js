const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy  = require('passport-local');
const User = require('../modules/user/user.models');
const dotenv = require('dotenv').config();

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false,{ message : 'User not found'});
        } else if (!user.authenticateUser(password)) {
            return done(null, false);
        }
        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
}))

const jwtOpts = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
   secretOrKey: process.env.JWT_SECRET,
 };
passport.use(new JwtStrategy(jwtOpts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
