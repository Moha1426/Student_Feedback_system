const express = require("express");
const router = express.Router();
const Student = require("../models/studentmodels");

// CREATE student
router.post("/", async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
});

// GET all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// GET student by ID
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

// DELETE student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

module.exports = router;
