
//import movie schema
const movies = require('../Model/MovieSchema')

exports.addMovie = async(req:any,res:any)=>{

    const{title,director,date,rating} = req.body

    try {
            const newMovie = new movies({
                title,
                director,
                date,
                rating
            })
            await newMovie.save()
            res.status(201).json(newMovie)           
        }       
     catch (err) {
        res.status(500).json(`Request failed due to ${err}`)
    }
}



//get all movies
exports.getMovies = async(req:any,res:any)=>{
    try {
     const allMovies = await movies.find()
     res.status(200).json(allMovies)
    } catch (err) {
     res.status(500).json(`Request failed due to ${err}`)
    }
 }


 //get specific movies
exports.getaMovie = async(req:any,res:any)=>{
    const {id} = req.params
    try {
     const Movie = await movies.find({_id:id})
     res.status(200).json(Movie)
    } catch (err) {
     res.status(500).json(`Request failed due to ${err}`)
    }
 }


//Update movies
exports.UpdateMovie = async(req:any,res:any)=>{
 
     const {id} = req.params
    const{title,director,date,rating} = req.body

    try {
          const updatedMovie = await movies.findByIdAndUpdate({_id:id},{title,director,date,rating},{new:true})
            res.status(201).json(updatedMovie)           
        }       
     catch (err) {
        res.status(500).json(`Request failed due to ${err}`)
    }
}




//delte movie
exports.deleteMovie = async(req:any,res:any)=>{
    const {id} = req.params
    try {
        const removeMovie = await movies.findByIdAndDelete({_id:id})
        res.status(204).json(removeMovie)
    } catch (error) {
        res.status(500).json(error)
    }
 }




