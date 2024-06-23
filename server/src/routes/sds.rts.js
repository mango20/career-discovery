//<--DEPENDENCIES-->//
//Libraries
import { Router } from "express";
//Controllers
import {
  createSDSCTRL,
  getAllSDSCTRL,
} from "./../layer.controller/sds.ctrl.js";

//Middlwares

//<--DEPENDENCIES-->//

const router = Router();

router.route("/").post(createSDSCTRL);
router.route("/data").post(getAllSDSCTRL);

export default router;
