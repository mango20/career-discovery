import logger from "../../utilities/logger.js";
import HttpStatusCodes from "../../constants/httpStatusCodes.const.js";
import APIError from "../../utilities/error/apiError.js";

export const validatorMW = (schema) => {
  return async (req, res, next) => {
    try {
      const data = req.body;
      const valid = await schema.validateAsync(data);
      return next();
    } catch (error) {
      logger.trace("MW ERROR: validator error");
      let message = "There was an error in validator mw";
      if (error.isJoi) {
        message = error.message;
      }
      return next(
        new APIError(
          "VALIDATION ERROR",
          HttpStatusCodes.VALIDATION_ERROR,
          true,
          message
        )
      );
    }
  };
};
