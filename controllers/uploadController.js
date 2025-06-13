const fs = require("fs");
const Document = require("../models/Document");

const uploadDocument = async (req, res) => {
  try {
    const fileBuffer = fs.readFileSync(req.file.path); // file read from disk

    const doc = new Document({
      fileName: req.file.originalname,
      filePath: req.file.path,
      data: fileBuffer, // save buffer in DB
      contentType: req.file.mimetype
    });

    await doc.save();
    res.json({ message: "File uploaded", doc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
};

module.exports = { uploadDocument };
