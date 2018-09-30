const Joi = require('joi');
module.exports = {
  createBook:{
      isbn: Joi.string().required(),
      title: Joi.string().required(),
      author: Joi.string().required(),
      description: Joi.string().required(),
      publish_year: Joi.string().required(),
  }
}
