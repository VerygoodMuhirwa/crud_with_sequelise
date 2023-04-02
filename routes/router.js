const {insertData,updateUser,deleteUser}= require("../controllers/dataControllers")
const express=require("express")
const router= express.Router()

router.post("/",insertData)
router.put("/:id",updateUser)
router.delete("/:id", deleteUser)
module.exports= router