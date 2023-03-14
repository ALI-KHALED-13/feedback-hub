const User = require("../../models/user");
const bcrypt = require("bcrypt");
const isEmail = require("validator/lib/isEmail");
const jwt = require("jsonwebtoken");


const { BadReqError, DB404Error, UnauthorizedError } = require("../utils/handleErrors");

const createToken =(_id, toBeRemembered)=> {
  return jwt.sign(
    {_id},
    process.env.SECRET,
    {expiresIn: toBeRemembered? "7d":"1d"}
  )
}
const hashPassword = async (password)=> {
  const saltStr = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, saltStr);
  return hashedPassword;
}

const register = async (req, res)=> {
  const {email, password} = req.body;

  // validate email
  if (!isEmail(email)) throw new BadReqError("Email is not valid");

  // hash passowrd
  
  req.body.password = await hashPassword(password);

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
  const toBeRemembered = req.body.rememberMe;
  // create a token
  const token = createToken(user._id, toBeRemembered);

  res.cookie("token", token, {
    httpOnly: true,
    // secure: true, maybe we need this
    maxAge: (toBeRemembered? 7 : 1) * 24 * 60 * 60 * 1000
  })
  
  user.password = undefined; // not to return this field to the frontend
  
  res.status(200).json(user);
}

const logout = async (req, res)=> {
  res.clearCookie("token");
  res.status(200).json({message: "logged out successfully"})
}

const updateUserInfo = async (req, res)=> {
  const id = req.params.id;

  const user = req.user;
  if (user.id !== id){
    throw new UnauthorizedError("you can edit your own info only")
  }

  if (req.body.password){
    req.body.password = await hashPassword(req.body.password);
  }
  const updatedUser = Object.assign(user, req.body);

  await updatedUser.save();
  res.status(200).send(updatedUser);
}


module.exports = {register, login, updateUserInfo, logout};