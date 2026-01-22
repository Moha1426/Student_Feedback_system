const express = require("express");
const router = express.Router();
const Admin = require("../models/adminmodels");

// CREATE admin
router.post("/", async (req, res) => {
  const admin = await Admin.create(req.body);
  res.json(admin);
});

// GET all admins
router.get("/", async (req, res) => {
  const admins = await Admin.find();
  res.json(admins);
});

// GET admin by ID
router.get("/:id", async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  res.json(admin);
});

// DELETE admin
router.delete("/:id", async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ message: "Admin deleted" });
});

module.exports = router;
