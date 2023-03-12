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
const auth = require("../../middlewares/auth");


// get many feedbacks havinga common property/field
router.get("/", catchErrors(getManyFeedbacks));

//get one Feedback
router.get("/:id", catchErrors(getFeedback));


// add a new Feedback stream
router.route("/").post(auth, catchErrors(addFeedback));

// modify a Feedback info (contributers, title?)
router.route("/:id").put(auth, catchErrors(modifyFeedback))

// delete a Feedback 
router.route("/:id").delete(auth, catchErrors(deleteFeedback))

module.exports = router;