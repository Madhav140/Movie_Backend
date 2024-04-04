

const express = require('express')

const userController = require('../Controllers/userControler')
const moviecontroller = require('../Controllers/movieController')
const jwtMiddlewareConfig = require('../Middlewares/jwtMiddleware')


const router = new express.Router()


 //a.register path
 router.post('/user/register',userController.register)

 //b.login path
 router.post('/user/login',userController.login)

 //movie post path
 router.post('/movie/add',jwtMiddlewareConfig,moviecontroller.addMovie)

  //get all movies
  router.get('/movie/get',jwtMiddlewareConfig,moviecontroller.getMovies)

   //movie updation
 router.put('/movie/update/:id',jwtMiddlewareConfig,moviecontroller.UpdateMovie)

  //movie deletion
  router.delete('/movie/delete/:id',jwtMiddlewareConfig,moviecontroller.deleteMovie)






 module.exports = router
