
class DB404Error extends Error {
  constructor (name, description = 'Not found.') {
    super(name, description);
    this.code = 404
  }
}

const handleError =(err, res)=> {
  let statusCode, message;
  switch (err.code){
    case undefined:
      if (err.name === "ValidationError"){
        statusCode = 400;
        message = Object.keys(err.errors).reduce((msg, key)=> {
          msg += err.errors[key].message + " ";
          return msg;
        }, "").trim();
      } else {// programmtic error
        statusCode = 500; 
        message = "internal server Error: " + err.message;
      }
      break;
    case 11000: // request tried to dublicate a saved unique key
      statusCode = 422;
      message = `this ${Object.keys(err.keyValue)[0]} is already used before!`;
      break;
    case 404:
      statusCode = 404;
      message = err.message;
      break;
    default:
      statusCode = 400;
      message = err.message
  }
  console.log(err); // sentry?
  res.status(statusCode).json({message})
}

const catchErrors =(controller)=> (req, res, next)=> {
  return Promise.resolve(controller(req, res, next)).catch((err)=> handleError(err, res));
}

module.exports = {catchErrors, DB404Error};