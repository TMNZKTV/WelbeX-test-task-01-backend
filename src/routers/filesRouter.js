const express = require("express");
const router = new express.Router();

const { getFilesController } = require("../controllers/filesController");
const { asyncWrapper } = require("../helpers/apiHelpers");

// Созадем раут на получение файлов
router.get("/files", asyncWrapper(getFilesController));

module.exports = {
  filesRouter: router,
};

// const multer = require("multer");
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");

// const FILE_DIR = path.resolve("./tmp");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, FILE_DIR);
//   },
//   filename: (req, file, cb) => {
//     const [filename, extension] = file.originalname.split(".");
//     cb(null, `${uuidv4()}.${extension}`);
//   },
// });

// const { asyncWrapper } = require("../helpers/apiHelpers");

// Cоздали контроллеры для authRouter

// Создали мидллвэр в мультере
// const uploadMiddleware = multer({ storage });

// Создаем раут на скачивание
// router.use("/download", express.static(FILE_DIR));
