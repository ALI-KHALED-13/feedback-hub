const mongoose = require("mongoose");

//elena will fetch to display the dropdown options and roadmap page from this collection

const statusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "suggestion",
    unique: true,
    lowercase: true
  }
});

module.exports = mongoose.model("status", statusSchema, 'statuses'); // explicitely defined the collection name to avoid grammer error (status --> statuss)
