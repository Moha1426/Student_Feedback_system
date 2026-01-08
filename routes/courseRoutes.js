const express = require("express");
const router = express.Router();
const Course = require("../models/coursemodels");

// CREATE course
router.post("/", async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

// GET all courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// GET course by teacherId
router.get("/teacher/:teacherId", async (req, res) => {
  const courses = await Course.find({ teacherId: req.params.teacherId });
  res.json(courses);
});

// DELETE course
router.delete("/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
});

module.exports = router;
