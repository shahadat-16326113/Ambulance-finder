const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({


  fname: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },

  lname: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },

  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,

  },

  password: {
    type: String,
    trim: true,
    required: true
  },

  phone: {
    type: String,
    trim: true,
    minlength: 11,
    unique: true,
    required: true
  },


  country: {
    type: String,
    required: true
  },


  city: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  dob: {
    type: String,
    required: true
  },

  
});

module.exports = mongoose.model("users", UserSchema);