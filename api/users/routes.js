const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const { catchErrors } = require("../utils/handleErrors");

// add a new user
router.post("/", catchErrors(async (req, res)=> {
  const user = await User.create(req.body);
  user.save();
  res.status(200).json(user);
}));

module.exports = router;