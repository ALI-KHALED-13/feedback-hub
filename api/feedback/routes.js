const express = require("express");
const { catchErrors } = require("../utils/handleErrors");
const router = express.Router();

const {
  getFeedback,
  addFeedback,
  modifyFeedback,
  deleteFeedback,
  getManyFeedbacks
} = require("./controllers");



// get many feedbacks havinga common property/field
router.get("/", catchErrors(getManyFeedbacks));

//get one Feedback
router.get("/:id", catchErrors(getFeedback));

// add a new Feedback stream
router.post("/", catchErrors(addFeedback));

// modify a Feedback info (contributers, title?)
router.put("/:id", catchErrors(modifyFeedback))

// delete a Feedback 
router.delete("/:id", catchErrors(deleteFeedback))

module.exports = router;