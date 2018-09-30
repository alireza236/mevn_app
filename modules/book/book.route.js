const router = require('express').Router();
const passport = require('passport');
const validate = require('express-validation');
const bookController = require('./book.controller');
const bookValidation = require('./book.validation');

      router.post('/',
        passport.authenticate('jwt', { session: false }),
        validate(bookValidation.createBook),
        bookController.create
      );

      router.get('/',
        passport.authenticate('jwt', { session: false }),
        bookController.getBookList
      );

      router.get('/:id',
        passport.authenticate('jwt', { session: false }),
        bookController.getBookById
        );

      router.put('/:id',
        passport.authenticate('jwt', { session: false }),
        bookController.updateBook
       );

      router.delete('/:id',
        passport.authenticate('jwt', { session: false }),
        bookController.deleteBook
      );


module.exports = router;
