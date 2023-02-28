const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  targetProduct: {
    type: mongoose.Types.ObjectId,
    ref: "product",
    required: true
  },
  tags: [String], // to be changed to [TagsSchema]
  status: {
    type: String, // to be changed to its own model/schema, which elena will fetch to display the dropdown options and roadmap page
    default: "suggestion"
  },
  upvotes: {
      type: [mongoose.Types.ObjectId],
      ref: "user",
  },
  comments: {
    type: [mongoose.Types.ObjectId],
    ref: "comment",
  }
});

module.exports = mongoose.model("feedback", feedbackSchema);