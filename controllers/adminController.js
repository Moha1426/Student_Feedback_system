const Admin = require("../models/adminmodels");

// CREATE admin
exports.createAdmin = async (req, res) => {
  res.json(await Admin.create(req.body));
};

// GET all admins
exports.getAdmins = async (req, res) => {
  res.json(await Admin.find());
};

// UPDATE admin
exports.updateAdmin = async (req, res) => {
  res.json(
    await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

// DELETE admin
exports.deleteAdmin = async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ message: "Admin deleted" });
};
