const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  contributers: {
    type: [mongoose.Types.ObjectId],
    ref: "user",
  }
}, {timestamps: true});

module.exports = mongoose.model("product", productSchema)