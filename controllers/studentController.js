const Student = require("../models/studentmodels");

// CREATE student
exports.createStudent = async (req, res) => {
  res.json(await Student.create(req.body));
};

// GET all students
exports.getStudents = async (req, res) => {
  res.json(await Student.find());
};



// UPDATE student
exports.updateStudent = async (req, res) => {
  res.json(
    await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

// DELETE student
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
};
