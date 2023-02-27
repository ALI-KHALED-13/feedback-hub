const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  addProduct,
  modifyProduct,
  deleteProduct
} = require("./controllers");





// get all products
router.get("/", getProducts);

//get one product
router.get("/:id", getProduct);

// add a new product stream
router.post("/", addProduct);

// modify a product info (contributers, title?)
router.put("/:id", modifyProduct)

// delete a product 
router.delete("/:id", deleteProduct)

module.exports = router;