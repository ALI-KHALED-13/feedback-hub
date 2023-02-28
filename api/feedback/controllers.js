const Feedback = require("../../models/feedback");
const User = require("../../models/user");

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
  res.json(feedback);
}

const addFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    const owner = await User.findById(req.body.owner);
    feedback.save();
    owner.feedbackHistory = [...owner.feedbackHistory, feedback.id]
    owner.save();
    res.status(200).json(feedback);
  } catch(err){
    res.status(400).json(err)
  }
}

const modifyFeedback = (req, res) => {
  const id = req.params.id
  const field = req.query || {}; // {"upvotes": 5}
  res.json({msg: "field modified for feedback " + id + " " + JSON.stringify(field)})
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