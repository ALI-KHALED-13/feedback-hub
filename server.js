require('dotenv').config(0);

const express = require("express");
const os = require("os");
const mongoose = require("mongoose");
const formData = require("express-form-data");
const cors = require('cors');
const path = require("path");
const cookieParser = require('cookie-parser')


const app = express();

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true
};


//middlewares
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(cors())
// parse data with connect-multiparty. 
app.use(formData.parse(options));



//routes
app.use("/api/products", require("./api/products/routes"));

app.use("/api/feedback", require("./api/feedback/routes"));

app.use("/api/users", require("./api/users/routes"));

app.use("/api/tags", require("./api/tags/routes"));

app.use("/api/status", require("./api/status/routes"))

// Return the client
app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(()=> {
    console.log("connected to DB successfully!")
    app.listen(process.env.PORT, ()=> {
      console.log("listening on port " + process.env.PORT);
    })
  })
  .catch((err)=> console.error(err))
