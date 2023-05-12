const mongoose=require("mongoose");

const TermsSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true
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

