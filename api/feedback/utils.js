const Product = require("../../models/product");

const Tag = require("../../models/tag");
const { UnauthorizedError } = require("../utils/handleErrors");

const checkForNewTags = async (reqBody)=>{
  if (!reqBody.tags) return;

  reqBody.tags = reqBody.tags.map(tag=> tag.toLowerCase());

  for (let tagName of reqBody.tags){
    const tagInDB = await Tag.exists({name: tagName})
    if (tagInDB === null){ // it's a newly added tag, add it to tags collection 
      await Tag.create({name: tagName})
    }
  }
}

const checkActionAccess = async ({user, feedback, fields = {}})=> {
  const targetProduct = await Product.findById(feedback.targetProduct);

  const isUserFBOwner = user._id.equals(feedback.owner);
  const isUserPDCTOwner = user._id.equals(targetProduct.owner);
  const isUserPDCTContributer = targetProduct.contributers.some(id=> id.equals(user._id));

  for (let field in fields){
    switch (field) {
      case "upvotes":
        if (isUserFBOwner) {
          throw new UnauthorizedError("you can't upvote your own feedback");
        }
        break;
      case "title":
      case "description":
      case "tags":
        if (!isUserFBOwner) {
          throw new UnauthorizedError(`only the owner of a feedback can change the ${field}`);
        }
        break;
      case "status":
        if (! (isUserPDCTOwner || isUserPDCTContributer) ) {
          throw new UnauthorizedError("you can't upvote your own feedback");
        }
        break;
      default:
        "other fields: comments can be added by anoyone, targetProduct and owner never change"
    }
  }

}

module.exports = {
  checkForNewTags,
  checkActionAccess
}