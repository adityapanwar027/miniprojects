const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,   // ✅ fixed
    unique: true,
  },

  password: {
    type: String,     // ✅ fixed
    required: true,   // ✅ fixed
  },
});

module.exports = mongoose.model("User", userSchema);