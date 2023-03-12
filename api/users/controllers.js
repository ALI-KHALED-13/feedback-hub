const User = require("../../models/user");
const bcrypt = require("bcrypt");
const isEmail = require("validator/lib/isEmail");
const jwt = require("jsonwebtoken");

const { BadReqError, DB404Error, UnauthorizedError } = require("../utils/handleErrors");

const createToken =(_id)=> {
  return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"})
}

const register = async (req, res)=> {
  const {email, password} = req.body;

  // validate email
  if (!isEmail(email)) throw new BadReqError("Email is not valid");

  // hash passowrd
  const saltStr = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, saltStr);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  
  // create a token
  const token = createToken(user._id);

  res.status(201).json({token, user});
}

const login = async (req, res)=> {
  const {identifier, password} = req.body; // identifier could be the email or username

  if (!identifier || !password) {
    throw new BadReqError("a required field is missing");
  }
  const identifierUsed = isEmail(identifier)? "email":"username";

  const user = await User.findOne({[identifierUsed]: identifier});

  if (user === null) {
    throw new DB404Error(`this ${identifierUsed} cannot be found or is incorrect`);
  }
  const isMatching = await bcrypt.compare(password, user.password);

  if (!isMatching){
    throw new UnauthorizedError("incorrect passowrd")
  }
  // create a token
  const token = createToken(user._id);
  
  user.password = undefined; // not to return this field to the frontend
  
  res.status(200).json({token, user});
}


module.exports = {register, login};