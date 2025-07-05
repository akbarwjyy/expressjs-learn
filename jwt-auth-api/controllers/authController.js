const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../user"); // Import user array from user.js

const generateToken = (user) => {
  return jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find((u) => u.username === username);
  if (existingUser)
    return res.status(400).json({ message: "Username sudah dipakai" });

  const hashed = await bcrypt.hash(password, 10);
  const user = { username, password: hashed };
  users.push(user);
  res.json({ message: "Register berhasil" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "User tidak ditemukan" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Password salah" });

  const token = generateToken(user);
  res.json({ token });
};
