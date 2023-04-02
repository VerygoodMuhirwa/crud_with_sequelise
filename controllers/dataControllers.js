const Data= require("../models/data")
const httpError = require("../models/httpError")
const {validationResult} = require("express-validator")
const insertData= async(req,res)=>{
    const {ID, name, Gender}  = req.body
    try{

        //first check if the user does not exist in the database
        const find= await Data.findOne({where:{ID}})
        if(find){
            res.status(409).json({message:"The user with that ID already exists"})
        }
        const newData= Data.create({ID,name, Gender})
    await res.json({message:"The user created successfully in the database",newData}).status(201)
    }

    catch(error){
        // const err= new httpError("Error when creating the user ",error)
        console.log(error);
        res.status(400).json({message:"The user failed to be created ",error})
    }



}
//updating the user
const updateUser= async (req,res)=>{
    console.log(req.body);
    const {name, Gender, birthOfDate} = req.body
    const userId= req.params.ID
    const userToUpdate= await Data.findOne(userId)
    if(! userToUpdate){
        res.send("User not found")
    }
    userToUpdate.name= name
    userToUpdate.Gender= Gender
userToUpdate.birthOfDate= birthOfDate
    await userToUpdate.save()
    try {
        res.json({message:"The user updated successfully"})
    } catch (error) {
        res.send(error)

console.log(error);    }
}


//deleting the user
const deleteUser= async (req,res)=>{
const userId= req.params.ID
const user= await Data.findOne(userId)
if(!user){
    res.send("No user found").status(400)

}
await user.destroy()
res.json({message:"The user deleted successfully"})
}
module.exports.deleteUser= deleteUser
module.exports.updateUser= updateUser
module.exports.insertData = insertData