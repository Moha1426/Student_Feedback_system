const Course = require("../models/coursemodels");

// CREATE course
exports.createCourse = async (req, res) => {
  res.json(await Course.create(req.body));
};

// GET all courses
exports.getCourses = async (req, res) => {
  res.json(await Course.find());
};

// UPDATE course
exports.updateCourse = async (req, res) => {
  res.json(
    await Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

// DELETE course
exports.deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
};
