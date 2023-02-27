

const getManyFeedbacks =(req, res)=> {
  //based on a common field (target, owner)
  const query = req.query || {}; // {"owner": "ali"}
  res.json({"feedbacks": "all feedbacks with the field of " + JSON.stringify(query)})
}

const getFeedback = (req, res) => {
  const id = req.params.id;
  res.json({["feedback" + id]: ["feedback1", "feedback2"]})
}

const addFeedback = (req, res) => {
  res.json({msg: "one new feedback added"})
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