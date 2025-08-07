import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        fullname: newUser.fullname,
        email: newUser.email,
        _id: newUser._id,
      },
    });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: { fullname: user.fullname, email: user.email, _id: user._id },
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Invalid email or password" });
  }
};

export const Change_Password = async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    const user = await User.findOne({ email });

    const isPasswordMatch = await bcryptjs.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordMatch)
      return res.status(400).json({ message: "Incorrect password" });

    user.password = await bcryptjs.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Invalid credentials" });
  }
};
