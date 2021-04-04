import Joi from 'joi';

  const storyPost = Joi.object({
    name: Joi.string().required(),
    genre: Joi.string().optional(),
    image: Joi.string().optional(),
    writer: Joi.string().optional(),
    writerEmail: Joi.string().optional(),
    storySummary: Joi.string().optional()
  });


  const storyGet = Joi.object({
    name: Joi.string().required()
  });

export {storyPost,storyGet};