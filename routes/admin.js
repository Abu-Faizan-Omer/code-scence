const express=require("express")
const router=express.Router()

const path=require("path")
const viewPath = require("../util/path")

const products=[]
//adding middleware
router.get('/add-product',(req,res,next)=>{
    res.sendFile(viewPath("add-product.html"))
})

router.post("/add-product",(req,res,next) =>{
    console.log(req.body)
    products.push({title:req.body.title})
    res.redirect("/")
}) 

module.exports={
    routes:router,
    products:products
}