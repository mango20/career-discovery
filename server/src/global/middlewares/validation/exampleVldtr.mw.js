import { validatorMW } from "./validator.mw.js";
import { exampleJoiObj } from "../../validator/example.vldtr.js";

export const exampleValidator = validatorMW(exampleJoiObj);
