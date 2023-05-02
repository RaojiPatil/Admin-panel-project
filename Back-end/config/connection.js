const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
// console.log(process.env.MONGO_URI)
mongoose
.connect("mongodb://0.0.0.0:27017/culturize_store")
.then(()=>console.log("Database connection succesfull"))
.catch((e)=>console.log("no connection in Database"+e))