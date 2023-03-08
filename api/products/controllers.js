const Product = require("../../models/product");
const User = require("../../models/user");
const { DB404Error } = require("../utils/handleErrors");

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query).populate("owner", {name: 1, pfp: 1})// should I populate contributers too ? main page or in the feedback board? design decision
  res.status(200).json(products);
}

const getProduct = async (req, res) => {
  
  const id = req.params.id;
  const product = await Product.findById(id).populate([
    {
      path: "feedback",
      model: "feedback",
      populate: {
        path: "status",
        model: "status",
        select: "name",
      }
    }
  ]);

  if (product === null) throw new DB404Error("product is not found")

  res.status(200).json(product);
}

const addProduct = async (req, res) => {
  const owner = await User.findById(req.body.owner);
  if (owner === null) {
    throw new DB404Error("user is not found, are you signed in?")
  }
  const product = await Product.create(req.body);

  owner.products = [...owner.products, product.id]
  owner.save();
  res.status(200).json(product); 
}

const modifyProduct = (req, res) => {
  const id = req.params.id
  const field = req.query || {}; // {"owner": "ali"}
  res.json({msg: "field modified for product " + id + " " + JSON.stringify(field)})
}

const deleteProduct = (req, res) => {
  // delete the all feedbacks related to this post, all the comments on said feedback, then delete the product itself and remove it from the owner record
  res.json({msg: "deleted product " + req.params.id})
}


module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  modifyProduct,
  deleteProduct
}