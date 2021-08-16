const { File } = require("../db/fileModel");

const getFiles = async () => {
  return await File.find();
};

module.exports = {
  getFiles,
};
