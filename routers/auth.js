const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const normalizeUserInput = require("../utils/normalizeInput");

const router = express.Router();
// ➕ Signup
router.post("/signup", async (req, res) => {
 const { email, password } = {
    email: req.body.email?.trim().toLowerCase(),
    password: req.body.password?.trim(),
  };
  try {
    const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0)
      return res.status(400).json({ message: "Email already exists" });
    await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// 🔐 Login
router.post("/login", async (req, res) => {
  console.log("✅ Login istəyi gəldi");
  console.log("📦 BODY:", req.body);

  const { email, password } = {
    email: req.body.email?.trim().toLowerCase(),
    password: req.body.password?.trim(),
  };

  try {
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    console.log("🔍 Tapılan userlər:", users);

    if (users.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("❌ Server error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


module.exports = router;
