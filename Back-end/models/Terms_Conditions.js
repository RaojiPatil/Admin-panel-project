const mongoose=require("mongoose");

const TermsSchema=new mongoose.Schema({
  title:{
    type:String,
    required:false,
  },
  description:{
    type:String,
    required:false,
  },
  fname:{
    type:String,
    required:false,
  },
  lname:{
    type:String,
    required:false,
  },
  email:{
    type:String,
    required:false,
  },
  mobile:{
    type:Number,
    required:false
  },
  file:{
    type:String,
    required:false
  },
},
{
  timestamps:true
})


const Terms=new mongoose.model("Terms",TermsSchema,'Terms');
 
module.exports=Terms;

