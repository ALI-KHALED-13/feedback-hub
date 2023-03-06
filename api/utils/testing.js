const request = {
  params: {
    id: "ahahahahaha"
  },
  body: {

  }
}
 const response = {
  data: null,
  json(document) {
    this.data = JSON.stringify(document);
  },
  statusCode: null,
  status(code) {
    this.statusCode = code;
    return this;
  }

}


module.exports = {response, request}