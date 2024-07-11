const mongoose= require('mongoose')
const productSchema=new mongoose.Schema({
  name:String,
  price:Number,
  image:String,
  category:String,
})
const product= mongoose.model("products",productSchema)
module.exports=product