const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 20,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: 1,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  pfp: {
    url : {
      type: String,
      default: "https://drive.google.com/file/d/1D6ihlPsfESHSu1W6Ozy9EZTdl14vmMJx/view?usp=sharing"
    }
  },
  birthDate: {
    type: String,
    validate: {
      validator: (dateStr)=> {
        return new Date() - new Date(dateStr) >= 12 * 365 * 24 * 60*60 * 1000;
      },
    }
  },
  activated: {
    type: Boolean,
    default: false
  },
  products: {
    type: [mongoose.Types.ObjectId],
    ref: "product"
  },
  feedbackHistory: {
    type: [mongoose.Types.ObjectId],
    ref: "feedback"
  },
  upvotesHistory: {
    type: [mongoose.Types.ObjectId],
    ref: "feedback"
  },
  commentsHistory: {
    type: [mongoose.Types.ObjectId],
    ref: "comment"
  },

}, {timestamps: true});


module.exports = mongoose.model("user", userSchema);