const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedbackmodels");

// CREATE feedback
router.post("/", async (req, res) => {
  const feedback = await Feedback.create(req.body);
  res.json(feedback);
});

// GET all feedbacks
router.get("/", async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
});

// GET feedback by teacherId
router.get("/teacher/:teacherId", async (req, res) => {
  const feedbacks = await Feedback.find({ teacherId: req.params.teacherId });
  res.json(feedbacks);
});

// DELETE feedback
router.delete("/:id", async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ message: "Feedback deleted" });
});

module.exports = router;
