require('dotenv').config()
const fs = require('fs');
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cors = require('cors');
const bodyParser = require("body-parser");
const router = express.Router();
const SignUp = require("../models/signup");
const otp = require("../models/otp");
const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars')
const handlebars = require('handlebars');
const path = require('path');
const cron = require('node-cron')
const multer = require('multer');

module.exports.registration = async (req, res) => {
  try {
    const useremail = await SignUp.findOne({ email: req.body.email });
    if (useremail) {
      res.send({
        status: 100,
        message: "email already exists."
      })
    } 
      // console.log(req.body);
      const user = new SignUp(req.body);

      // console.log(req.body);

      const token = await user.generateAuthToken();
   
   
        // console.log(`current password is ${req.body.password}`);
        req.body.password = await bcrypt.hash(req.body.password, 10);
      user.password = req.body.password;
      // console.log(user,"user");
      res.status(200).send({
        message: "user reqisterd successfully",
        status: 200,
        data: user,
      });
      // console.log(user);
      await user.save();

  } catch (e) {
    // console.log('error', e);
    throw new Error(e);
  }
}

module.exports.login = async (req, res) => {
  try {
    if(req.body.email){
      const email = req.body.email;
      const password = req.body.password;
      // console.log(email);
      const useremail = await SignUp.findOne({ email: email });
      // const useremail = await SignUp.findOne({ $or: [{username: email}, {email: email}] });
      // console.log(useremail,"useremail");
      const hPassword = await bcrypt.compare(password, useremail.password);
  

      if (hPassword == true) {
        res.status(200).send({
          message: "user login successfully",
          status: 200,
          data: useremail
        });
      } else {
        res.status(400).send({
          message: "user not login ",
          status: 400,
          error: "Login details are else invalid"
        })
      }
    }
  } catch (e) {
    res.status(400).send({
      message: "user not registered ",
      status: 400,
      error: "Login details are catch invalid",
    });
  }
}


module.exports.otpSend = async (req, res) => {
  const data = await SignUp.findOne({ email: req.body.email });
  const alreadyOtp = await otp.findOne({ email: req.body.email });
  // console.log(data);
  if(alreadyOtp){
    const deleteOtp = await otp.deleteOne({ email: req.body.email });
  }
  if (data) {
    var otpCode = 2000 + Math.floor(Math.random() + Math.random() * 900);
    // console.log( typeof(otpCode));

    const otpData = new otp({
      email: req.body.email,
      code: otpCode,
      userId:data._id,
      expiryIn: new Date().getTime()
    });
    const otpResponse = await otpData.save();
    res.status(200).send({
      message: "user otp created successfully",
      status: 200,
      data: otpResponse
    });
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: 'raojipatil.dignizant@gmail.com',
        pass: 'ninulkvlsppmwagu'
      }
    });
  
const templatePath = path.join(__dirname, 'views', 'sendmail.hbs');
const templateString = fs.readFileSync(templatePath, 'utf8');
const template = handlebars.compile(templateString);

// define a function to send the OTP email
function sendOTPEmail(toEmail, otpCode) {
    // render the HTML content from the template and the data
    const html = template({ otpCode });

    // send mail with defined transport object
    return transporter.sendMail({
        from: 'culturisestore@yahoo.com', // replace with your email address
        to: toEmail, // recipient email address
        subject: 'OTP Verification', // email subject
        html // email content
    });
}
  }else{
    res.status(400).send({
      message: "email id is incorrect",
      status: 400,
      data: "error"
    })
  }
  await sendOTPEmail(req.body.email, otpCode); 
}


module.exports.checkOtp = async (req, res) =>{
 const findOtp=await otp.findOne({userId:req.params.id});
 if(!findOtp){
  res.status(400).send({
    message:"Your Otp was expired please generate new otp to procced !",
    status:400,
  })
 }else{
  console.log(findOtp,"console.log(findOtp,",req.body.otp);
  if(findOtp.code == req.body.otp){
   res.status(201).send({
     message:"Otp matched successfully",
     status:200,
   })
  }else{
   res.status(400).send({
     message:"Incorrect Otp please enter valid Otp ",
     status:400,
   })
  }
 }
 
}

module.exports.resetPassword = async (req, res) => {
  try {
    const user = await SignUp.findOne({ _id: req.params.id })
    if (user) {

      userPassword = await req.body.password;
      userCPassword = await req.body.cPassword;

      if (userPassword == userCPassword) {
        userPasswordHash = await bcrypt.hash(userPassword, 10);
        const updatedData = await SignUp.updateOne({ _id: req.params.id }, { $set: { password: userPasswordHash, } })
        res.status(200).send({
          message: "password successfully reset.",
          status: 200,
          data: user
        });
      } else {
        // console.log("enter same password in both field");
        res.status(400).send({
          message: "Enter same password in both field",
          status: 400,
          data: "error"
        })
      }
    } else {
      // console.log("enter correct email address");
      res.status(400).send({
        message: "enter correct email address",
        status: 400,
        data: "error"
      })
    }
  } catch (e) {
    res.status(400).send({
      message: "Enter valid Email address",
      status: 400,
      data: e,
    })
  }
}

cron.schedule('* * * * * * *', async () => {
  try {
    const checkOtp = await otp.find()


    for (let index = 0; index < checkOtp.length; index++) {
      const element = checkOtp[index];
      const DiffTime = Date.now() - parseInt(element.expiryIn);
      const over5Minute = DiffTime >= 300000
      if (over5Minute) {
        const DeleteOtp = await otp.deleteOne({ _id: element._id })
        // res.status(200).send({ status: 200, message: "story is deleted because of it was more then 24 hours" })
      }
    }
  } catch (e) {
    // res.send({ error: e })
  }

})

// const upload = multer({ dest: 'uploads/' }); // Set the destination folder for uploaded files

// change password

module.exports.changePassword = async (req, res) => {
  try {
    const user = await SignUp.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        status: 400,
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);
    if (!isMatch) {
      return res.send({
        status: 400,
        message: "Incorrect password",
      });
    }
    user.password = await bcrypt.hash(req.body.newPassword, 10);
    await user.save();
    res.status(200).send({
      message: "Password updated successfully",
      status: 200,
      data: user,
    });
  } catch (e) {
    throw new Error(e);
  }
};

const Terms = require('../models/Terms_Conditions');

module.exports.addNewTermsAndCondData = async (req, res) => {
  try {
    const newData = new Terms({
      // Extract the required data from the request body and create a new document with it
      title: req.body.title,
      description: req.body.description,
      // add any other fields you need here
    });

    // Save the new document to the database
    const result = await newData.save();

    res.status(201).send({
      message: 'New data added successfully',
      status: 201,
      data: result,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Server error',
      status: 500,
      error: e.message,
    });
  }
};



module.exports.getAllData = async (req, res) => {
  try {
    const data = await Terms.find();

    res.status(200).send({
      message: 'Data retrieved successfully',
      status: 200,
      data: data,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Server error',
      status: 500,
      error: e.message,
    });
  }
};


module.exports.deleteTerm = async (req, res) => {
  try {
    const id = req.params.id;
    const term = await Terms.findByIdAndDelete(id);
    if (!term) {
      return res.status(404).send({
        message: 'Terms data found',
        status: 404,
      });
    }
    res.status(200).send({
      message: 'Get data successfully',
      status: 200,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Server error',
      status: 500,
      error: e.message,
    });
  }
};



module.exports.ViewTerms = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Terms.findById(id);
    if (!data) {
      return res.status(404).send({
        message: 'Term not found',
        status: 404,
      });
    }
    res.status(200).send({
      message: 'Term deleted successfully',
      status: 200,
      data: data
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Server error',
      status: 500,
      error: e.message,
    });
  }
};


module.exports.updateTermsAndCondData = async (req, res) => {
  try {
    // Extract the required data from the request body
    const { id, title, description } = req.body;

    // Find the document by ID and update it with the new data
    const result = await Terms.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    res.status(200).send({
      message: 'Data updated successfully',
      status: 200,
      data: result,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Server error',
      status: 500,
      error: e.message,
    });
  }
};




// Example API endpoint for file upload
module.exports.uploadfile = async (req, res) => {
// app.post('/api/upload', upload.single('file'), (req, res, next) => {
  try {
    // Access the uploaded file using req.file
    // You can then save the file to the database or perform other operations on it
    console.log(req.body.file);
    const data = await Terms.create(req.body)
    res.status(201).send({
      message: 'File uploaded successfully',
      status: 201,
      data: data
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      message: 'Server error',
      status: 500,
      error: e.message,
    });
  }
};



// Set up middleware to handle file uploads
// app.post('/upload', upload.single('file'), (req, res) => {
//   res.send('File uploaded successfully');
// });