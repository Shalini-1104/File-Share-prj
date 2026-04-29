const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const si = async(req, res) =>{
    try{
        const body = req.body; 
       const user =  await UserModel.create(body); 
       
        res.status(200).json({message: "Signup successful"});
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const login =async (req, res)=>{
    try{
        const {email, password} = req.body;

       const user = await UserModel.findOne({email: email});

       if(!user){
        return res.status(404).json({message: "user not found"})
       }

       const isLogin = await bcrypt.compare(password, user.password);
  
       if(!isLogin) return res.status(401).json({message: "invalid password"})   

       console.log(user)
        res.status(200).json({message: "login successfull"})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    si,
    login
}