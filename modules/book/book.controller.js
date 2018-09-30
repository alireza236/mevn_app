 const Book = require('./book.model');
 const bookController = {}

  bookController.create = async (req, res) =>{
    try {
         const book = await Book.create(req.body);
         return res.status(200).json(book);
     } catch (e) {
         return res.status(500).json(e);
      }

};

module.exports = bookController;
