import Joi from "joi";

export const sdsJoiObj = Joi.object({
  date: Joi.string().required(),
  personalInfo: Joi.object().keys({
    fullName: Joi.string().required(),
    sex: Joi.string().required(),
    age: Joi.number().required(),
    yearsOfEducation: Joi.string().required(),
  }),
});
