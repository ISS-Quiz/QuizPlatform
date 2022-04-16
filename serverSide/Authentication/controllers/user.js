
const User = require("../models/user")
const {validationResult} = require('express-validator')
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')


exports.signup = (req,res) => {
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors);

        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }
    const { email, password } = req.body;

  try {
    const user = new User(req.body)
    if (user == User.findOne({email})) return res.status(400).send("User already registered.");
    
    user.save((err, user) => {
        if(err) {

            return res.status(400).json({
                error:"Unable to add user"
            
            })
        }
        console.log(user)
        return res.json({
            message: "Success",
            user
        })
    })
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
 
}

exports.signin = (req,res) => {
    const {name,password} =req.body

    User.findOne({name}, (err,user)=> {
        if(err || !user) {
            return res.status(400).json({
                error:"Email was not found"
            })
              
        }

        //Authenticate the user
        if(!user.authenticate(password)) {
            console.log("error")
            return res.status(400).json({
                error: "Email and password do not match"
            })
        }

        // Create token
        const token = jwt.sign({_id: user._id}, process.env.SECRET)

        // Put token into cookie
        res.cookie('token',token, {expire: new Date()+1})

        // Send response 
        
        const {_id,name,email,isAdmin,encry_password} = user
        console.log(user.email)
        return res.json({
            user: {
                _id,
                name,
                email,
            }
        })
    })
}

exports.signout = (req,res) => {
    res.clearCookie("token")
    return res.json({
        message:"User signout successfully"
    })
}