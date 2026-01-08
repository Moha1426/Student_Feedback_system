const express = require("express");
const router = express.Router();
const Teacher = require("../models/teachermodels");

// CREATE teacher
router.post("/", async (req, res) => {
  const teacher = await Teacher.create(req.body);
  res.json(teacher);
});

// GET all teachers
router.get("/", async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

// GET teacher by ID
router.get("/:id", async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  res.json(teacher);
});

// DELETE teacher
router.delete("/:id", async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: "Teacher deleted" });
});

module.exports = router;
