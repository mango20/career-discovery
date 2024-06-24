//<--DEPENDENCIES-->//
//Libraries
import dotenv from "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
//Utilities
import logger from "./global/utilities/logger.js";
import errorHandler from "./global/utilities/error/errorHandler.js";
//Middlewares
import setResponseHeadersMW from "./global/middlewares/setResponseHeader.mw.js";
import errorMW from "./global/middlewares/error.mw.js";
import apiLoggerMW from "./global/middlewares/apiLogger.mw.js";
//Routes
import example from "./routes/example.rts.js";
import sds from "./routes/sds.rts.js";
//<--DEPENDENCIES-->//

const app = express();
const PORT = 5000 || process.env.PORT;

//express config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(setResponseHeadersMW);
app.use(cors());
app.use(apiLoggerMW);

//Routes
// app.use("/api/example", example);
app.use("/api/sds", sds);

//Error MW
app.use(errorMW);

process.on("unhandledRejection", (reason) => {
  throw reason;
});

process.on("uncaughtException", (error) => {
  errorHandler.handleError(error);

  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});

mongoose
  .connect(
    `mongodb+srv://careerdiscovery:CareerDiscovery2024@careerdiscoverywithjpro.mo7i8mg.mongodb.net/careerdiscovery-hostinger?retryWrites=true&w=majority&appName=careerdiscoverywithjprocter`
  )
  .then(() => {
    logger.info("Connected to DB!");
    app.listen(PORT, () => {
      logger.info(
        { STATUS: "LISTENING", PORT },
        `Server successfully running on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    logger.error(error, "Connection to DB failed");
  });
