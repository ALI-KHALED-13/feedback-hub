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
  const feedback = await Feedback.findById(id).populate("comments");
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
  res.status(200).json(feedback);
}

const modifyFeedback = async (req, res) => {
  try {
    const id = req.params.id
    const targetFeedback = await Feedback.findById(id);
    if (targetFeedback === null) throw new DB404Error("Feedback doesn't exist");

    if (targetFeedback.tags.join(",") !== req.body.tags.join(",")){
      req.body.tags = req.body.tags.map(tag=> tag.toLowerCase());

      for (let tagName of req.body.tags){
        const tagInDB = await Tag.exists({name: tagName})
        if (tagInDB === null){ // it's a newly added tag, add it to tags collection 
          const tag = await Tag.create({name: tagName})
          tag.save();
        }
      }
    }

    targetFeedback = {...targetFeedback, ...req.body};
    
    targetFeedback.save();
    res.status(200).json(`${property} was updated succefully`)
  } catch (err){
    res.status(400).json({message: err.message})
  }

}

const deleteFeedback = (req, res) => {
  const id = req.params.id
  res.json({msg: "deleted feedback " + id})
}


module.exports = {
  getFeedback,
  addFeedback,
  modifyFeedback,
  deleteFeedback,
  getManyFeedbacks
}