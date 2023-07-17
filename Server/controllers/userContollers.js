import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const userSignInController = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ message: "User is not exist" }] });
    }

    const isPasswrodMatch = await bcrypt.compare(password, user.password);
    if (!isPasswrodMatch) {
      return res.status(400).json({ errors: [{ message: "Passwrod is not match" }] });
    }

    res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

export const userSignUpController = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ errors: [{ message: "User is already exists" }] });
  }

  user = new User({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();

  res.status(200).json({ successes: [{ message: "User Sign Up Successfully" }] });
};
