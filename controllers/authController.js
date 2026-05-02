const User = require("../models/User"); // ✅ correct path + capital
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; // ✅ fixed

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password); // ✅ fixed
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { userId: user._id }, // ✅ fixed
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    console.log(error); // ✅ add this for debugging
    res.status(500).json({
      message: "Internal server error",
    });
  }
};