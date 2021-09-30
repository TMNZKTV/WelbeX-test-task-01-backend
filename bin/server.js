const app = require("../app");
require("dotenv").config();
const PORT = process.env.PORT || 8083;
const { connectMongo } = require("../src/db/connection");

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
