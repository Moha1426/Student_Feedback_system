const Teacher = require("../models/teachermodels");

// CREATE teacher
exports.createTeacher = async (req, res) => {
  res.json(await Teacher.create(req.body));
};

// GET all teachers
exports.getTeachers = async (req, res) => {
  res.json(await Teacher.find());
};

// UPDATE teacher
exports.updateTeacher = async (req, res) => {
  res.json(
    await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

// DELETE teacher
exports.deleteTeacher = async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.json({ message: "Teacher deleted" });
};
