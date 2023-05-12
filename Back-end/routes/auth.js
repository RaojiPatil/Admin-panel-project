require('dotenv').config()
const { connect } = require("../config/connection");
// const { upload } = require("../middleware/fileupload");

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
const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads/'); // Set the upload destination folder
//     },
//     filename: function (req, file, cb) {
//       cb(null, g); // Set the file name
//     },
//   });

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `admin-${file.fieldname}-${Date.now()}${ext}`);
  },
});

//   const upload = multer({ dest: "public/files" })
 const upload = multer({
  storage: multerStorage,
  limits: { fileSize: 1024 * 1024 * 5 },
   // Set the maximum file size (in bytes)
});



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
router.get('/viewTerms/:id', registration.ViewTerms);
router.put('/updateTermsAndCondData', registration.updateTermsAndCondData);
router.post('/uploadfile',upload.single('file'), registration.uploadfile);

module.exports=router;