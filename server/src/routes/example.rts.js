//<--DEPENDENCIES-->//
//Libraries
import { Router } from "express";
//Controllers
import { postExampleCtrl } from "../layer.controller/example.ctrl/write.js";
//Middlwares
import { exampleValidator } from "../global/middlewares/validation/exampleVldtr.mw.js";
//<--DEPENDENCIES-->//

const router = Router();

router.route("/").post(exampleValidator, postExampleCtrl);

export default router;
