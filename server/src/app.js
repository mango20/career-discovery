//<--DEPENDENCIES-->//
//Libraries
import dotenv from "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import * as url from "url";

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
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

//express config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet({ contentSecurityPolicy: false }));
// app.use(setResponseHeadersMW);
app.use(cors());
app.use(apiLoggerMW);

app.use(express.static(path.join(__dirname, "../../client/build")));

// Handle all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

app.use("/testing", (req, res) => {
  console.log("hakdog");
  res.send("hakdog");
});
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
  .connect(process.env.CONNECTION_STRING)
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
