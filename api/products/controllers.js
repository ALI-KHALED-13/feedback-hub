const Product = require("../../models/product");
const User = require("../../models/user");

const getAllProducts = async (req, res) => {
  const products = await Product.find(req.body).populate("owner"); // should I populate contributers too ? here or in the feedback board? design decision
  res.status(200).json(products);
}

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err){
    res.status(400).json(err)
  }

}

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    const owner = await User.findById(req.body.owner);
    
    product.save();
    owner.products = [...owner.products, product.id]
    owner.save();
    res.status(200).json(product);
  } catch(err){
    res.status(400).json(err)
  }

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