const mongoose = require("mongoose");

//elena will fetch from this collection to display tag option upon at the step of creating a feedback

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }
});

module.exports = mongoose.model("tag", tagSchema)