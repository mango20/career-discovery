import HttpStatusCodes from "../../global/constants/httpStatusCodes.const.js";
import APIError from "../../global/utilities/error/apiError.js";
import logger from "../../global/utilities/logger.js";
import SDS from "../models/sds.mdl.js";
import Auth from "../models/auth.mdl.js";

export const createSDS = async (
  date,
  personalInfo,
  activities,
  occupationalDaydreams,
  occupations,
  competencies,
  selfEstimate,
  report
) => {
  try {
    const result = await SDS.create({
      date,
      personalInfo,
      activities,
      occupationalDaydreams,
      occupations,
      competencies,
      selfEstimate,
      report,
    });
    return result;
  } catch (error) {
    logger.error(error, "DATA ERROR: Was not able to create and save sds data");
    return new APIError(
      "DATABASE_ACCESS",
      HttpStatusCodes.DATABASE_ACCESS,
      true,
      "Error in trying to save sds in the database."
    );
  }
};

export const getAllSDS = async () => {
  try {
    const result = await SDS.find({});
    return result;
  } catch (error) {
    logger.error(error, "DATA ERROR: Was not able to get all sds data");
    return new APIError(
      "DATABASE_ACCESS",
      HttpStatusCodes.DATABASE_ACCESS,
      true,
      "Error in trying to get all sds data in the database."
    );
  }
};
