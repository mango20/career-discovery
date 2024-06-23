import HttpStatusCodes from "../../global/constants/httpStatusCodes.const.js";
import APIError from "../../global/utilities/error/apiError.js";
import logger from "../../global/utilities/logger.js";
import Example from "../models/example.mdl.js";

export const createExample = async (name, test) => {
  try {
    const result = await Example.create({ name, test });
    return result;
  } catch (error) {
    logger.trace("DATA ERROR: Was not able to create and save example");
    return new APIError(
      "DATABASE_ACCESS",
      HttpStatusCodes.DATABASE_ACCESS,
      true,
      "Error Testing In DAL"
    );
  }
};
