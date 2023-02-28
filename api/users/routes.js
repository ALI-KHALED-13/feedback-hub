const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// add a new user
router.post("/", async (req, res)=> {
  try {
    const user = await User.create(req.body);
    user.save();
    res.status(200).json(user);
  } catch(err){
    console.log(err.name);
    res.status(400).json(err);
  }
  
});

module.exports = router;