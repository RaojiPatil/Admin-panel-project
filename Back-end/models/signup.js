const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require('dotenv').config()
const jwt = require("jsonwebtoken");
const registerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  tokens:
    [{
      token:{
        type:String, 
        required:true
    }
  }]

});
  

registerSchema.methods.generateAuthToken = async function () {
  try {
    token = jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
    console.log(token);
    this.tokens = this.tokens.concat({ token: token })
    if (this.tokens) {
      // console.log("already token");
    } else {
      this.save();
    }
    return token;

  } catch (e) {
    // res.send(e);
    console.log(e);
  }
}

const SignUp = new mongoose.model("SignUp", registerSchema);

module.exports = SignUp;
