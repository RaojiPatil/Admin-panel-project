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
},
{
  timestamps:true
})


const Terms=new mongoose.model("Terms",TermsSchema,'Terms');
 
module.exports=Terms;

