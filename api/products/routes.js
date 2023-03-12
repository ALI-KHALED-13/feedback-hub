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

const auth = require("../../middlewares/auth");


// main page
router.get("/", catchErrors(getAllProducts));

//get one product
router.get("/:id", catchErrors(getProduct));


// add a new product stream
router.route("/").post(auth, catchErrors(addProduct)) //post("/", catchErrors(addProduct));

// modify a product info (contributers, title?)
router.route("/:id").put(auth, catchErrors(modifyProduct));

// delete a product 
router.route("/:id").delete(auth, catchErrors(deleteProduct));


module.exports = router;
