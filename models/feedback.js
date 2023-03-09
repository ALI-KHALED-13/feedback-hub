const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
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
  tags: {
    type: [String],
  },
  status: {
    type: mongoose.Types.ObjectId,
    ref: "status",
    required: true
  },
  upvotes: {
      type: [mongoose.Types.ObjectId],
      ref: "user",
  },
  comments: {
    type: [mongoose.Types.ObjectId],
    ref: "comment",
  }
}, {timestamps: true});

module.exports = mongoose.model("feedback", feedbackSchema);