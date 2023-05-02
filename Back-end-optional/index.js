const express = require('express');
const mongoose = require('mongoose');

// create a new express application
const app = express();
const Users=require('./model');
// set up middleware to parse JSON
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/my-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to database'))
.catch(error => console.error(error));

// define a schema for a simple user model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// create a model from the schema

// define a route to create a new user
app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
 
  try {
    const user = new Users({ name, email, password });
    console.log(user,"user")
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});
app.get('/users', async (req, res) => {
  try {
   const findData = await Users.find();
   console.log(findData,"findData");
   res.send(findData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  console.log(req.body)
    // Check if the email and password match an existing user
    const user =await Users.findOne({email:req.body.email});
    console.log(user,"user")
    if (user.password==req.body.password &&   user.email==req.body.email) {
      // If no user is found, return an error response
      res.send({
        Data:user,
        status:201,
        message:"Login successfully"
    });
    }else{
        return res.status(401).json({ error: 'Invalid credentials' });
    }
  });




// start the server
const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})

