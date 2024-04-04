//import mongoose
import mongoose from 'mongoose'

//create schema
const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
   director:{
        type:String,
        require:true,
   },
    date:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    }
})


//create model
const details = mongoose.model("Details",MovieSchema) 

//export 
module.exports = details