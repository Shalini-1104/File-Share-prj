const FileModel = require("../model/file.model");


const createFile = async(req,res)=>{
    try{
        console.log(req.file)
        res.status(200).json({message : "file created"})
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

module.exports = {
    createFile
}