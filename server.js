/* eslint-disable no-console */
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

const { connectMongo } = require("./src/db/connection");

const { filesRouter } = require("./src/routers/filesRouter");

const { errorHandler } = require("./src/helpers/apiHelpers");

const PORT = process.env.PORT || 8083;
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", filesRouter);

app.use(errorHandler);

const start = async () => {
  try {
    await connectMongo();

    app.listen(PORT, (error) => {
      if (error) {
        console.log("Error at server launch: ", error);
      }
      console.log(`Server is available at ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to launch an app with error: ${error.message}`);
  }
};

start();
