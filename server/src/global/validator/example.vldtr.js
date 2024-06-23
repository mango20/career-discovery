import Joi from "joi";

export const exampleJoiObj = Joi.object({
  test: Joi.boolean(),
  name: Joi.string().required(),
});
