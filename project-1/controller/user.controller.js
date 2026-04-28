const UserModel = require("../model/user.model");

const si = async(req, res) =>{
    try{
        const body = req.body; 
       const user =  await UserModel.create(body); 
       
        res.status(200).json({message: "Signup successful"});
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    si,
}