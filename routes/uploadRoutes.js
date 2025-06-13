const express = require("express");
const multer = require("multer");
const { uploadDocument } = require("../controllers/uploadController");

const router = express.Router();

// Storage setup for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // File will be stored in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Add timestamp to the file name to avoid duplication
  },
});

const upload = multer({ storage });

// POST endpoint for file upload
router.post("/upload", upload.single("file"), uploadDocument);

module.exports = router;
