const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//register controller
const register = async (req, res) => {
  try {
    const { email, password, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      phone,
    });
    await newUser.save();
    res.status(201).json({ message: `User registered with ${email}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error registering user" });
  }
};
//login controller

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user._id, phone: user.phone },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      id: user._id,
      email: user.email,
      phone: user.phone,
      created_at: user.created_at,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in" });
  }
};

//export controllers
module.exports = {
  register,
  login,
};
