const express = require("express");
const router = express.Router();
const Account = require("../models/accountmodels");

// CREATE account
router.post("/", async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all accounts
router.get("/", async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});

// LOGIN (simple)
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Account.findOne({ username, password });
  if (!user) return res.status(401).json({ message: "Invalid login" });
  res.json({ message: "Login success", user });
});

module.exports = router;
