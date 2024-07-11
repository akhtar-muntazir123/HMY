
const express= require("express")
const port = 3000
const app = express()
const cors= require("cors")
require("./db/config")
const User=require("./db/user")
const Product=require("./db/product")



app.use(express.json())
app.use(cors())

//register
app.post("/register",async(req,res)=>{
    //  contains the data sent in the request body, typically from an HTTP POST request.
    const user= User(req.body)
    //save will save the data into the database
    let result= await user.save();
    result= result.toObject()
    delete result.password
    res.send(result)
})

//login
app.post("/login",async(req,res)=>{
    if(req.body.email && req.body.password){
        let result=await User.findOne(req.body).select("-password")
        if (result)
           res.send(result)
       else 
       res.send({result:"user with matching details not found"})
    }
   else{
    res.send({result:"Fields are not filled"})
   }
    })

app.listen(port,()=>{
 console.log(`server running at port ${port}`)
})

//api creation  for product 
// app.get("/cards",async(req,res)=>{
//     let result= await product.find()
//     res.send(result)
//     })


app.get("/",async(req,res)=>{
        let data=await Product.find()
        console.log(data)
        res.send(data)
})



