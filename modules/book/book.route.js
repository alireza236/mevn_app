const router = require('express').Router();
const validate = require('express-validation');
const bookController = require('./book.controller');
const bookValidation = require('./book.validation');

router.post('/',validate(bookValidation.createBook),bookController.create);

module.exports = router;
