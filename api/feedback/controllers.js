const Feedback = require("../../models/feedback");
const User = require("../../models/user");
const Tag = require("../../models/tag");
const { DB404Error, UnauthorizedError } = require("../utils/handleErrors");
const Product = require("../../models/product");
const { checkForNewTags, checkActionAccess } = require("./utils");

// seems obsolete now but will see if there is use for it in the future
const getManyFeedbacks = async (req, res)=> {
  //based on a common field (targetProduct, owner)
  const query = req.query;
  if (Object.keys(query).length === 0) {
    throw new Error("no query was passed")
  }
  const feedbacks = await Feedback.find(query);
  res.status(200).json(feedbacks);

}

const getFeedback = async (req, res) => {
  const id = req.params.id;
  const feedback = await Feedback.findById(id).populate("status");//.populate("comments");
  
  if (!feedback) throw new DB404Error("feedback can't be found");

  res.status(200).json(feedback);
}

const addFeedback = async (req, res) => {

  const user = req.user;

  req.body.owner = user._id;

  const targetProduct = await Product.findById(req.body.targetProduct);
  
  if (!targetProduct) {
    throw new DB404Error("this product is probably deleted");
  }

  checkForNewTags(req.body);
  const feedback = await Feedback.create(req.body);

  targetProduct.feedback = [...targetProduct.feedback, feedback._id];
  await targetProduct.save();

  user.feedbackHistory = [...user.feedbackHistory, feedback._id];
  await user.save();

  res.status(201).json(feedback);
}

const modifyFeedback = async (req, res) => {
  const id = req.params.id
  const feedback = await Feedback.findById(id);
  
  if (feedback === null) {
    throw new DB404Error("Feedback doesn't exist");
  }

  await checkActionAccess({user: req.user, feedback, fields:req.body})
  // if no errors throw nf rom the above function then we do the modification

  if (  req.body.tags && 
      feedback.tags.join(",") !== req.body.tags.join(",")
  ){
    checkForNewTags(req.body);
  }

  const modifiedDoc = Object.assign(feedback, req.body);
  
  await modifiedDoc.save();
  res.status(200).json(modifiedDoc)

}

const deleteFeedback = async(req, res) => {
  const id = req.params.id;
  const feedback = await Feedback.findById(id);
  if (!feedback) {
    throw new DB404Error("feedback id is missing or not found")
  } 

  const user = req.user;

  if (!user._id.equals(feedback.owner)){
    throw new UnauthorizedError("only the feedback owner can delete it")
  }

  const targetProduct = await Product.findById(feedback.targetProduct);
  
  if (targetProduct){ // only excute this block if the product is still present (as it might be deleted at one point and we are keeping the feedback)
    targetProduct.feedback = targetProduct.feedback.filter(feedbackId=> !feedbackId.equals(id) );
    await targetProduct.save();
  }

  user.feedbackHistory = user.feedbackHistory.filter(feedbackId=> !feedbackId.equals(id));
  await user.save();

  await feedback.remove();
  res.status(200).json({message:`feedback was deleted succefully`})
}


module.exports = {
  getFeedback,
  addFeedback,
  modifyFeedback,
  deleteFeedback,
  getManyFeedbacks
}