const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next)=> {
  // verify authentication
  const tokenPassed = req.cookies.token;
  
  if (!tokenPassed) {
    return res.status(401).json({message: "Authorization token required, are you logged in?"})
  }
  
  try {
    const {_id} = jwt.verify(tokenPassed, process.env.SECRET);

    req.user = await User.findById(_id);
    next()

  } catch (err){
    console.error(err);
    let message = err.message;
    if (err.name == "TokenExpiredError"){
      res.clearCookie("token");
      message = "you need to login again first"
    }
    res.status(401).json({message})
  }
  
}

module.exports = auth;