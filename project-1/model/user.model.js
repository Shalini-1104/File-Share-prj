const {Schema, model} = require('mongoose');

const bcrypt = require("bcrypt");

const userSchema = new Schema({
    fullname :{
        type: String,
        trim : true,
        required: true,
    },
    mobile:{
        type: String,
        trim : true,
        required: true,
    },
    email:{
        type : String,
        trim : true,
        required : true,
        match:[
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"
        ]
    },
    password:{
        type : String,
        required : true,
    }
},{timestamps: true})

userSchema.pre("save", async function(){
   const emailExists= await model("User").countDocuments({email : this.email});
   if(emailExists>0){
    throw new Error("Email already exists");
   }
})

userSchema.pre("save",async function(){
    const hashPassword =  await bcrypt.hash(this.password.toString(), 12);
    this.password = hashPassword;
})



const UserModel = model('User', userSchema);

module.exports = UserModel;