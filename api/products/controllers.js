

const getProducts = (req, res) => {
  res.json({"products": []})
}

const getProduct = (req, res) => {
  const id = req.params.id;
  res.json({["product" + id]: ["feedback1", "feedback2"]})
}

const addProduct = (req, res) => {
  res.json({msg: "one new peoduct added"})
}

const modifyProduct = (req, res) => {
  const id = req.params.id
  const field = req.query || {}; // {"owner": "ali"}
  res.json({msg: "field modified for product " + id + " " + JSON.stringify(field)})
}

const deleteProduct = (req, res) => {
  res.json({msg: "deleted product " + req.params.id})
}


module.exports = {
  getProducts,
  getProduct,
  addProduct,
  modifyProduct,
  deleteProduct
}