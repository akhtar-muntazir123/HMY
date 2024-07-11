const mongoose= require('mongoose')
const cors= require("cors")
const dbConnect= async()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Hungreez").then(console.log("connected"))
  
}
dbConnect()
const productSchema=new mongoose.Schema({
  name:String,
  price:Number,
  image:String,
  url:String
})

