const express=require("express")
const router=express.Router()

const path=require("path")
const viewPath = require("../util/path")

const adminData=require("./admin")

router.get('/',(req,res,next)=>{
    //dirname =give the current directory or location
    console.log(adminData.products)
    res.sendFile(viewPath("shop.html"))
})

module.exports=router