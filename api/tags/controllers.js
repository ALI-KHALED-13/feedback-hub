const Tag = require("../../models/tag");

const getAllTags = async (req, res)=> {
  const tags = await Tag.find({});
  res.status(200).json(tags);
}

const addTags = async (req, res)=> { // two accepted formulas {name: "lena"} || ["lena", "mop"]
  const tagsToBeAdded = Object.values(req.body);

  for (let tagName of tagsToBeAdded){
    await Tag.create({name: tagName})
  }
  res.status(201).json({message:"tag(s) added successfully"})
}


module.exports = {getAllTags, addTags};