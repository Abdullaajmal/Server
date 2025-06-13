const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  data: Buffer, // <-- Add this
  contentType: String // <-- Optional but good for serving file
});

module.exports = mongoose.model("Document", DocumentSchema);
