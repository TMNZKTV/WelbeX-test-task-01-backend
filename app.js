/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { filesRouter } = require("./src/routers/filesRouter");
const { errorHandler } = require("./src/helpers/apiHelpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(express.json());
app.use(morgan(formatsLogger));

app.use("/api", filesRouter);
app.use(errorHandler);

module.exports = app;
