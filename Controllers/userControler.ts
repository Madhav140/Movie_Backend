

//import user schema
const users = require('../Model/userSchema')

import jwt from 'jsonwebtoken'

exports.register = async (req:any,res:any)=>{
    console.log('inside the controller');
    const {name,email,password} = req.body
     
    try{const existuser = await users.findOne({email}) 
   
   if(existuser){
    res.status(409).json("Account already exist.... please Login")  
   }
   else{
          const newUser = new users({
            name,
            email,
            password
          })
        await newUser.save()
    res.status(201).json(newUser) 
   }
}
   catch(err){
    res.status(400).json(`Registration failed due to ${err}`)
   }

}



//login request
exports.login = async(req:any,res:any)=>{
    const {email,password} = req.body
  
   try{ 
    const existuser = await users.findOne({email,password})
  
    if(existuser){
        const token = jwt.sign({userid:existuser._id},"secretkey")
      res.status(201).json({existuser,token})
    }
    else{
  res.status(401).json('Invalid email or password')
    }}catch(err){
      res.status(400).json(`login failed due to ${err}`)
    }
  }

