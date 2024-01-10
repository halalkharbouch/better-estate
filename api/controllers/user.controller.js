import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const test = (req, res) => {
  res.json({ message: "User route works" });
};

