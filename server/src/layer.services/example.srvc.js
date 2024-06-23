import logger from "../global/utilities/logger.js";
import HttpStatusCodes from "../global/constants/httpStatusCodes.const.js";
import { createSDS } from "./../layer.data/repository/sds.repo.js";

export const createExampleSRVC = async (date, personalInfo) => {
  try {
    const result = await createSDS(date, personalInfo);
    return result;
  } catch (error) {
    logger.trace("SRVC ERROR: Was not able to create and save sds");
    return new APIError(
      "DATABASE_ACCESS",
      HttpStatusCodes.INTERNAL_SERVER,
      true,
      "Error in using a service to create sds."
    );
  }
};
