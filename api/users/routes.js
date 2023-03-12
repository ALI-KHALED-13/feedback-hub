const express = require("express");
const router = express.Router();

const { catchErrors } = require("../utils/handleErrors");
const { register , login} = require("./controllers");

// add a new user
router.post("/register", catchErrors(register));

// login
router.post("/login", catchErrors(login));

module.exports = router;