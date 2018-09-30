
 const userController = {}

  userController.signUp = async function(req, res) {
    // try {
    //      const user = await User.create(req.body);
    //      return res.status(HTTPStatus.CREATED).json(user);
    //  } catch (e) {
    //      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    //   }
    try {
         return res.status(200).send(req.body);
     } catch (error) {
         return res.status(500).send(error);
      }
};


 userController.login = async function(req, res, next) {
    res.status(200).send(req.method);
    return next();
};

module.exports = userController;
