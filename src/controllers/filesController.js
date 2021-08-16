const { getFiles } = require("../services/filesService");

const getFilesController = async (req, res) => {
  const files = await getFiles();
  res.status(200).json({ files });
};

module.exports = {
  getFilesController,
};
