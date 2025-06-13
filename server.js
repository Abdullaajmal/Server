const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// Connect to the database (if needed)
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve static files (uploaded documents)
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/docs", require("./routes/uploadRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
