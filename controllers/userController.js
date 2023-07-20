
const userModel = require('../models/userModel.js') ;

//! function for creating new user 
const createUser = async (req , res) => {
    try {
        const userExists = await userModel.find(req.body) ;
        if ( !userExists) {
            try {
                await userModel.create(req.body) ;
                res.status(200).json({
                    'success' : true ,
                    'message' : 'the user has been created with success' ,
                    'first_name' : req.body.first_name ,
                    'last_name' : req.body.last_name ,
                    'email' : req.body.email ,
                }) ;
            }
            catch(error) {
                res.status(404).json({
                    'success' : false ,
                    'message' : 'something went wrong' ,
                    'error' : error ,
                }) ;
            }
        }
        else {
            res.status(501).json({
                'success' : false ,
                'message' : 'this user is already exists' ,
            }) ;
        }
    }
    catch(error) {
        res.status(404).json({
            'success' : false ,
            'error' : error ,
        }) ;
    }
}

//! function for login an user
const loginUser = async (req , res) => {
    try {
        const {email , password} = req.body ;
        const userExists = await userModel.find({email : email , password : password}) ;
        if ( userExists.length == 1 ) {
            res.status(200).json({
                'success' : true ,
                'message' : `Welcome back ${userExists[0].first_name} ${userExists[0].last_name}` ,
            })
        } 
        else {
            res.status(404).json({
                'success' : false ,
                'message' : `this credentials is not valid` ,
            }) 
        }
    }
    catch(error) {
        res.status(404).json({
            'success' : false ,
            'error' : error ,
        }) ;
    }
}

module.exports = { createUser , loginUser } ;