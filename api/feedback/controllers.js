const Feedback = require("../../models/feedback");
const User = require("../../models/user");
const Tag = require("../../models/tag");
const { DB404Error } = require("../utils/handleErrors");
const Product = require("../../models/product");

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

  const owner = await User.findById(req.body.owner);
  const targetProduct = await Product.findById(req.body.targetProduct);
  
  if (!owner || !targetProduct) {
    throw new DB404Error((owner? "product":"owner") +" id is missing or not found")
  }
  const feedback = await Feedback.create(req.body);
  feedback.tags = feedback.tags?.map(tag=> tag.toLowerCase()) || [];
  
  for (let tagName of feedback.tags){
    const tagInDB = await Tag.exists({name: tagName})
    if (tagInDB === null){ // it's a newly added tag, add it to tags collection 
      const tag = await Tag.create({name: tagName})
      tag.save();
    }
  }
  targetProduct.feedback = [...targetProduct.feedback, feedback.id];
  targetProduct.save();
  owner.feedbackHistory = [...owner.feedbackHistory, feedback.id];
  owner.save();
  res.status(201).json(feedback);
}

const modifyFeedback = async (req, res) => {
  const id = req.params.id
  const targetFeedback = await Feedback.findById(id);
  
  if (targetFeedback === null) throw new DB404Error("Feedback doesn't exist");

  if (  req.body.tags && 
      targetFeedback.tags.join(",") !== req.body.tags.join(",")
  ){
    req.body.tags = req.body.tags.map(tag=> tag.toLowerCase());

    for (let tagName of req.body.tags){
      const tagInDB = await Tag.exists({name: tagName})
      if (tagInDB === null){ // it's a newly added tag, add it to tags collection 
        await Tag.create({name: tagName})
      }
    }
  }

  const modifiedDoc = Object.assign(targetFeedback, req.body);
  
  await modifiedDoc.save();
  res.status(200).json(modifiedDoc)

}

const deleteFeedback = async(req, res) => {
  const id = req.params.id;
  const feedback = await Feedback.findById(id);
  const owner = await User.findById(req.body.owner);
  const targetProduct = await Product.findById(req.body.targetProduct);
  
  if (!owner || !feedback) {
    throw new DB404Error((owner? "feedback":"owner") +" id is missing or not found")
  } 
  if (targetProduct){ // only excute this block if the product is still present (as it might be deleted at one point and we are keeping the feedback)
    targetProduct.feedback = targetProduct.feedback.filter(feedbackId=> feedbackId !== id);
    await targetProduct.save();
  }

  owner.feedbackHistory = owner.feedbackHistory.filter(feedbackId=> feedbackId !== id);
  await owner.save();

  await feedback.remove();
  res.status(200).json(`feedback was deleted succefully`)
}


module.exports = {
  getFeedback,
  addFeedback,
  modifyFeedback,
  deleteFeedback,
  getManyFeedbacks
}