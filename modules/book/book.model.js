const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
      isbn: {
         type: String,
         required: [true, 'Text is required!'],
         minlength: [5, 'ISBN need to be longer!'],
       },
        title: {
         type: String,
         required: [true, 'Title is required!'],
       },
       author: {
         type: String,
         required: [true, 'author is required!'],
       },
       description: {
         type: String,
         required: [true, 'description is required!'],
       },
       published_year: {
         type: String,
         required: [true, 'publish_year is required!'],
       },
       publisher: {
         type: String,
         required: [true, 'publish is required!'],
       },
     },
   {
     timestamps: true
   });

  let Book  = mongoose.model('Book', BookSchema);
  module.exports = Book;
