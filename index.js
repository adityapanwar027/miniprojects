const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes"); //  ADD HERE

const app = express();

app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/users", userRoutes); //  ADD HERE

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running ");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});