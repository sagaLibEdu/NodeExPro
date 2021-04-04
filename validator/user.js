import Joi from 'joi';

  const userPost = Joi.object({
    name: Joi.string().required(),
    age: Joi.string().optional(),
    contact: Joi.string().optional(),
    email: Joi.string().required(),
    password: Joi.string().required()
  });

  const userLogin = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  });


  const userGet = Joi.object({
    name: Joi.string().required()
  });

export {userPost,userGet,userLogin};