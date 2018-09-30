
const userRoutes = require('./user/user.route');
const bookRoutes = require('./book/book.route');

 module.exports = (app) => {
     app.use('/api/v1/users', userRoutes);
     app.use('/api/v1/books', bookRoutes);
 };
