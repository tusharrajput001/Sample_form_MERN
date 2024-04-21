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
});


// Model Export

module.exports = mongoose.model("User",userSchema);