const mongoose = require("mongoose");

// Schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone:{
    type:Number,
    required: true,
  },
  add:{
    type: String,
    required: true,
  }
});


// Model Export

module.exports = mongoose.model("User",userSchema);