const Feedback = require("../../models/feedback");
const User = require("../../models/user");
const Tag = require("../../models/tag");

const getManyFeedbacks = async (req, res)=> {
  //based on a common field (target, owner)
  const query = req.query;
  try {
    if (Object.keys(query).length === 0) {
      throw new Error("no query was passed")
    }
    const feedbacks = await Feedback.find(query);
    res.status(200).json(feedbacks);

  } catch (err){
    res.status(400).json({message: err.message})
  }
}

const getFeedback = async (req, res) => {
  const id = req.params.id;
  const feedback = await Feedback.findById(id).populate("comments");
  res.status(200).json(feedback);
}

const addFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    const owner = await User.findById(req.body.owner);
    feedback.tags = feedback.tags?.map(tag=> tag.toLowerCase()) || [];
    
    for (let tagName of feedback.tags){
      const tagInDB = await Tag.exists({name: tagName})
      if (tagInDB === null){ // it's a newly added tag, add it to tags collection 
        const tag = await Tag.create({name: tagName})
        tag.save();
      }
    }
    feedback.save();
    owner.feedbackHistory = [...owner.feedbackHistory, feedback.id]
    owner.save();
    res.status(200).json(feedback);
  } catch(err){
    res.status(400).json(err)
  }
}

const modifyFeedback = async (req, res) => {
  try {
    const id = req.params.id
    const targetFeedback = await Feedback.findById(id);

    let {property, value} = req.body; // {"upvotes": 5}, {"status": ""} .. etc 
    if ([property, value].includes(undefined)) {
      throw new Error("no query was passed, or not in the expected format. expected format: ?property=propertyName&value=newValueArr")
    }
    if (property === "tags"){
      value = value.map(tag=> tag.toLowerCase());
      for (let tagName of value){
        const tagInDB = await Tag.exists({name: tagName})
        if (tagInDB === null){ // it's a newly added tag, add it to tags collection 
          const tag = await Tag.create({name: tagName})
          tag.save();
        }
      }
    }
    targetFeedback[property] = value;
    
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