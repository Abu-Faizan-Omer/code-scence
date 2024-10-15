const http=require("http")
const express=require("express")
const bodyParser=require("body-parser")
const app=express()

const path=require("path")
const viewPath=require("./util/path")

const adminData=require("./routes/admin")
const shopRoutes=require("./routes/shop")

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,"public")))

app.use(shopRoutes)
app.use('/admin',adminData.routes)

//add 404 page
app.use((req,res,next)=>{
    res.statusCode=404
    res.sendFile(viewPath("page-not-found.html"))
})

app.listen(4000)//no need to write createserver or server.listen this code is already written in expressjs