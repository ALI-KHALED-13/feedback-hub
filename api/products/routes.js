const express = require("express");
const { catchErrors } = require("../utils/handleErrors");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  addProduct,
  modifyProduct,
  deleteProduct
} = require("./controllers");



// main page
router.get("/", catchErrors(getAllProducts));

//get one product
router.get("/:id", catchErrors(getProduct));

// add a new product stream
router.post("/", catchErrors(addProduct));

// modify a product info (contributers, title?)
router.put("/:id", catchErrors(modifyProduct));

// delete a product 
router.delete("/:id", catchErrors(deleteProduct));


module.exports = router;