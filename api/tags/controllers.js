const Tag = require("../../models/tag");

const getAllTags = async (req, res)=> {
  const tags = await Tag.find({});
  res.status(200).json(tags);
}

const addTags = async (req, res)=> { // two accepted formulas {name: "lena"} || ["lena", "mop"]
  const tagsToBeAdded = Object.values(req.body);

  for (let tagName of tagsToBeAdded){
    const tag = await Tag.create({name: tagName})
    tag.save();
  }
  res.status(200).json("tag(s) added successfully")
}


module.exports = {getAllTags, addTags};