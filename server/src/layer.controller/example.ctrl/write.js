//<--DEPENDENCIES-->//
//Constants
import ResponseCodes from "../../global/constants/responseCodes.const.js";
//Utilities
import logger from "../../global/utilities/logger.js";
import APIError from "../../global/utilities/error/apiError.js";
import HttpStatusCodes from "../../global/constants/httpStatusCodes.const.js";

//<--DEPENDENCIES-->//
import { createExampleSRVC } from "./../../layer.services/example.srvc.js";

export const postExampleCtrl = async (req, res, next) => {
  const { test, name } = req.body;
  try {
    if (!test) {
      throw new APIError(
        "NOT FOUND",
        HttpStatusCodes.NOT_FOUND,
        true,
        "Error Testing in CTRL"
      );
    }
    const result = await createExampleSRVC(name, test);
    return res.status(201).send({
      code: ResponseCodes.SUCCESS,
      message: "Successful Request",
      result,
    });
  } catch (error) {
    logger.trace("CTRL ERROR: Was not able to post example");
    next(error);
  }
};
