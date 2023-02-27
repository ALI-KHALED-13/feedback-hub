require('dotenv').config(0);

const express = require("express");
const cors = require('cors');
const productsRoutes = require("./api/products/routes");
const feedbacksRoutes = require("./api/feedback/routes");

const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())




app.listen(process.env.PORT, ()=> {
  console.log("listening on port " + process.env.PORT);
})


//routes
app.use("/api/products", productsRoutes);
app.use("/api/feedback", feedbacksRoutes);
