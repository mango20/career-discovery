import { createSDS, getAllSDS } from "../layer.data/repository/sds.repo.js";
import logger from "../global/utilities/logger.js";
import HttpStatusCodes from "../global/constants/httpStatusCodes.const.js";
import APIError from "../global/utilities/error/apiError.js";

export const createSDSSRVC = async (
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
    const result = await createSDS(
      date,
      personalInfo,
      activities,
      occupationalDaydreams,
      occupations,
      competencies,
      selfEstimate,
      report
    );
    return result;
  } catch (error) {
    logger.trace("SRVC ERROR: Was not able to create and save example");
    return new APIError(
      "DATABASE_ACCESS",
      HttpStatusCodes.INTERNAL_SERVER,
      true,
      "Error Testing in SRVC"
    );
  }
};

export const getAllSDSSRVC = async () => {
  try {
    const result = await getAllSDS();

    const finalResult = result.map((r) => {
      const obj = {
        date: r.date,
        personalInfo: r.personalInfo,
        report: r.report,
      };
      return obj;
    });
    return finalResult;
  } catch (error) {
    logger.trace("SRVC ERROR: Was not able to create and save example");
    return new APIError(
      "DATABASE_ACCESS",
      HttpStatusCodes.INTERNAL_SERVER,
      true,
      "Error Testing in SRVC"
    );
  }
};
