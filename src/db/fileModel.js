const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = {
  File,
};
