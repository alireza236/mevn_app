const User = require('./user.models');
 const userController = {}

  userController.signUp = async (req, res) => {
    try {
         const user = await User.create(req.body);
         return res.status(201).json(user);
     } catch (e) {
         return res.status(500).json(e);
      }

};

 userController.login = async (req, res, next) => {
    res.status(200).json(req.user.toAuthJSON());
    return next();
};

module.exports = userController;
