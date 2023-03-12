const express = require("express");
const { catchErrors } = require("../utils/handleErrors");
const router = express.Router();

const {getAllTags, addTags} = require("./controllers");
const auth = require("../../middlewares/auth");

// upon adding tag that react comp should know what's available in the db already to suggest it as user types
router.get("/", catchErrors(getAllTags));


// if the user selects none of the sugesstions and add his custom ones
router.route("/").post(auth, catchErrors(addTags));


module.exports = router;