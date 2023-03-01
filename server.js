require('dotenv').config(0);

const express = require("express");
const os = require("os");
const mongoose = require("mongoose");
const formData = require("express-form-data");
const cors = require('cors');

const productsRoutes = require("./api/products/routes");
const feedbacksRoutes = require("./api/feedback/routes");
const usersRoutes = require("./api/users/routes");
const tagsRoutes = require("./api/tags/routes");

const app = express();

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true
};


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())
// parse data with connect-multiparty. 
app.use(formData.parse(options));



//routes
app.use("/api/products", productsRoutes);

app.use("/api/feedback", feedbacksRoutes);

app.use("/api/users", usersRoutes);

app.use("/api/tags", tagsRoutes)



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
