const router = require('express').Router();
const passport = require('passport');
const validate = require('express-validation');

const userValidation = require('./user.validation');
const userController  = require('./user.controller');

router.post('/signup',validate(userValidation.signup),userController.signUp);

router.post('/login',passport.authenticate('local', { session: false }),userController.login);

module.exports = router;
