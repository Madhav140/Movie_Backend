//import mongoose
import mongoose from 'mongoose'

//create schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,    
    },
    password:{
        type:String,
        require:true
    }
})


//create model
const users = mongoose.model("users",userSchema) 

//export 
module.exports = users