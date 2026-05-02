const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth"); //  THIS WAS MISSING

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// routes
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});