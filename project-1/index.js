const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB);

const express = require("express");

const multer = require("multer");



// const storage = multer.diskStorage({
//     destination:(req, file , next)=>{
//        next(null , "files/") 
//     },

//     filename:(req, file , next)=>{

//     }
// })

const morgan = require("morgan");
const { createUser, si, login } = require("./controller/user.controller");
const { createFile } = require("./controller/file.controller");

const app = express();

app.listen(process.env.PORT || 8080);


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("view"));

app.get("/",(req , res)=>{
    res.send("connected");
})

app.post("/signin",si);
app.post("/login",login);
app.post("/file",createFile)