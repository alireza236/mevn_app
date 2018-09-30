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

  bookController.getBookList = async (req, res) =>{
     try {
        const book = await Book.find({});
         return res.status(200).json(book);
      } catch (e) {
         return res.status(500).json(e);
      }
};


bookController.getBookById = async (req, res) =>{
    try {
         const book = await Book.findById(req.params.id);
         return res.status(200).json(book);
     } catch (e) {
       return res.status(500).json(e);
     }
};


bookController.updateBook = async (req, res) =>{
  try {
       const book = await Book.findByIdAndUpdate(req.params.id, req.body);
       return res.status(200).json(book);
   } catch (e) {
       return res.status(500).json(e);
    }
};

bookController.deleteBook = async (req, res) =>{
  try {
       const book = await Book.findByIdAndRemove(req.params.id, req.body);
       return res.status(200).json(book);
   } catch (e) {
       return res.status(500).json(e);
    }
};

module.exports = bookController;
