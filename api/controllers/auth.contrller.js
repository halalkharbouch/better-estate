import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  const { username, password, email } = req.body;
  console.log(req.body);
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler("Invalid credentials", 401));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler("Invalid credentials", 401));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: userPassword, ...user } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(user);
  } catch (error) {
    next(error);
  }
};

export const logOut = (req, res, next) => {
  try {
    res.clearCookie("access_token").status(200).json({ message: "Logged out" });
  } catch (error) {
    next(error);
  }
  
}
