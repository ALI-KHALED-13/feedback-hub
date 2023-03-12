const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async(req, res, next)=> {
  // verify authentication
  const {autherization} = req.headers;
  
  if (!autherization) {
    return res.status(401).json({message: "Authorization token required, are you logged in?"})
  }
  
  try {
    const tokenPassed = autherization.slice(autherization.indexOf(" ") + 1);
    const {_id} = jwt.verify(tokenPassed, process.env.SECRET);

    req.user = await User.findById(_id);

    next()
  } catch (err){
    console.error(err);
    res.status(401).json({message})
  }
  
}

module.exports = auth;