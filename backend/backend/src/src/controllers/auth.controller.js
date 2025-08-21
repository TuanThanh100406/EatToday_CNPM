const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

function signToken(user) {
  const payload = { sub: user.id, role: user.role, email: user.email };
  const secret = process.env.JWT_SECRET || "supersecret";
  return jwt.sign(payload, secret, { expiresIn: "7d" });
}

// POST /auth/register
async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email & password required" });

    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(409).json({ message: "Email already registered" });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash });

    return res.status(201).json({ id: user.id, email: user.email });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

// POST /auth/login
async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = signToken(user);
    return res.json({ token });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

// GET /auth/me (đòi JWT)
async function me(req, res) {
  try {
    const user = await User.findByPk(req.user.sub, {
      attributes: ["id", "name", "email", "role", "preferences", "budgetWeekly", "dietType"]
    });
    return res.json(user);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

module.exports = { register, login, me };


