const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();

const { catchErrors } = require("../utils/handleErrors");
const { register , login, updateUserInfo} = require("./controllers");

// add a new user
router.post("/register", catchErrors(register));

// login
router.post("/login", catchErrors(login));

router.route("/:id").put(auth, catchErrors(updateUserInfo));

module.exports = router;