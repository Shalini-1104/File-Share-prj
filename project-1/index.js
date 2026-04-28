const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB);

const express = require("express");
const morgan = require("morgan");
const { createUser, si } = require("./controller/user.controller");

const app = express();

app.listen(process.env.PORT || 8080);


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("view"));

app.get("/",(req , res)=>{
    res.send("connected");
})

app.post("/user",si);