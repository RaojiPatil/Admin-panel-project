const mongoose=require("mongoose");

const Agentpanel=new mongoose.Schema({
  Name:{
    type:String,
    required:true,
  },
  Email:{
    type:String,
    required:false,
  },
  Mobile:{
    type:Number,
    required:false,
  },
},
{
  timestamps:true
})


const Agent=new mongoose.model("Agent",Agentpanel,'Agent');
 
module.exports=Agent;

