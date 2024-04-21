//express
const express = require("express");
//mongoose
const mongoose = require("mongoose");
// Router Import
const router = express.Router();
//import model
const User = require("../Models/userModel");


router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll); 
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  }
});


router.post("/", async(req,res) => {
  const {name,age} = req.body;
  try{
    const userAdded = await User.create({
      name:name,
      age:age,
    });

    res.status(201).json(userAdded);
  }
  catch(err){
    console.log(err);
    res.status(400).json({error: error.message});
  }
});




module.exports = router;