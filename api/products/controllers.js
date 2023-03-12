const Product = require("../../models/product");
const User = require("../../models/user");
const { DB404Error, UnauthorizedError } = require("../utils/handleErrors");

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
  const owner = req.user;
  if (owner === null) {
    throw new UnauthorizedError("not permitted, are you logged in?")
  }
  req.body.owner = owner;

  const product = await Product.create(req.body);

  owner.products = [...owner.products, product.id]
  await owner.save();
  res.status(201).json(product); 
}

const modifyProduct = async (req, res) => {
  const id = req.params.id
  const targetProduct = await Product.findById(id);
  
  if (targetProduct === null) {
    throw new DB404Error("Product doesn't exist");
  }
  
  const user = req.user;
  if (user !== targetProduct.owner) {
    throw new UnauthorizedError(`not permitted, only the owner can edit this product`)
  }

  const modifiedDoc = Object.assign(targetProduct, req.body);
  
  await modifiedDoc.save();
  res.status(200).json(modifiedDoc)
}

const deleteProduct = async (req, res) => {
  const id = req.params.id
  const targetProduct = await Product.findById(id);
  
  if (targetProduct === null) {
    throw new DB404Error("Product doesn't exist");
  }
  
  const user = req.user;
  if (user !== targetProduct.owner) {
    throw new UnauthorizedError(`not permitted, only the owner can delete this product`)
  }

  user.products = user.products.filter(pdctId=> pdctId !== targetProduct.id);
  await user.save();

  await targetProduct.remove();
  res.status(200).json({message:`product was deleted succefully`})
}


module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  modifyProduct,
  deleteProduct
}