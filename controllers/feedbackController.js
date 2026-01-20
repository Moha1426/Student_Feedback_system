const Feedback = require("../models/feedbackmodels");

// CREATE feedback
exports.createFeedback = async (req, res) => {
  res.json(await Feedback.create(req.body));
};

// GET all feedbacks
exports.getFeedbacks = async (req, res) => {
  res.json(await Feedback.find());
};

// UPDATE feedback
exports.updateFeedback = async (req, res) => {
  res.json(
    await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

// DELETE feedback
exports.deleteFeedback = async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ message: "Feedback deleted" });
};
