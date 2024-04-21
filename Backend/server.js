//express setup
const express = require('express');
const app = express();

// dotenv sec. purpose 
const dotenv = require("dotenv");
dotenv.config();

// Import Route
const userRoute = require("./Routes/userRoute");

// cors
const cors = require("cors");
app.use(cors());


// data will converted into json
app.use(express.json());


//mongo setup
const mongoose = require("mongoose");
mongoose
.connect(process.env.URI)
.then(()=>{
    console.log("MONGO Connected Successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if(err) console.log(err);
      console.log(`Form listening on port ${process.env.PORT}`);
    });
})
.catch((err)=>{
  console.log("error",err);
})

app.use(userRoute);





