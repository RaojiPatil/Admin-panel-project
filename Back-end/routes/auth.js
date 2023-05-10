require('dotenv').config()
const { connect } = require("../config/connection");
const express = require("express");
const app = express();
const cors = require('cors');

const nodemailer=require("nodemailer");
const router=express.Router();
const middelware=require("../middleware/middleware")

let registration;
registration = require("../controller/auth.controller");

app.use(express.json());
app.use(cors());

// const getRegisterData=require("../controllers/userController")


// console.log(registration.registration,"registration");
router.post("/",registration.registration);
router.post("/login",registration.login);
router.post("/otpsend",registration.otpSend);
router.post("/resetpassword/:id",registration.resetPassword);
router.post("/checkOtp/:id",registration.checkOtp);
router.post("/changepassword",registration.changePassword);
// router.post("/verifyPassword",registration.verifyPassword);
// router.get("/", getRegisterData.getRegisterData);
router.post("/addNewTermsAndCondData",registration.addNewTermsAndCondData);
router.get("/getAllData",registration.getAllData);
router.delete('/termsdelete/:id', registration.deleteTerm);
router.put('/updateTermsAndCondData', registration.updateTermsAndCondData);


module.exports=router;