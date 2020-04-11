import Joi from '@hapi/joi';

export const registerValidation = (data) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).required(),
    email: Joi.string()
      .min(6)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

export const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .min(3)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
export const mediaValidation = (data) => {
  const schema = Joi.object({
    media_id: Joi.number().required(),
    media: Joi.object().required(),
  });
  return schema.validate(data);
};
export const RatingValidation = (data) => {
  const schema = Joi.object({
    media_id: Joi.string().required(),
    rating: Joi.number().max(10).required(),
  });
  return schema.validate(data);
};
