const express = require("express");
const router = express.Router();

const {
  getFeedback,
  addFeedback,
  modifyFeedback,
  deleteFeedback,
  getManyFeedbacks
} = require("./controllers");



// get many feedbacks havinga common property/field
router.get("/", getManyFeedbacks);

//get one Feedback
router.get("/:id", getFeedback);

// add a new Feedback stream
router.post("/", addFeedback);

// modify a Feedback info (contributers, title?)
router.put("/:id", modifyFeedback)

// delete a Feedback 
router.delete("/:id", deleteFeedback)

module.exports = router;