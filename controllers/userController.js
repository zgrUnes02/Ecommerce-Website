
const generateToken = require('../config/generateToken.js');
const userModel = require('../models/userModel.js') ;

//! function for creating new user :
const createUser = async (req , res) => {
    try {
        const userExists = await userModel.find(req.body) ;
        if ( userExists.length == 0 ) {
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

//! function for login an user :
const loginUser = async (req , res) => {
    try {
        const {email , password} = req.body ;
        const userExists = await userModel.find({email : email , password :password}) ;
        if ( userExists.length == 1 ) {
            res.status(200).json({
                'success' : true ,
                'message' : `Welcome back ${userExists[0].first_name} ${userExists[0].last_name}` ,
                'token' : generateToken(userExists[0]._id) ,
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

//! function for getting all users :
const getAllUsers = async (req , res) => {
    try {
        allUsers = await userModel.find({}) ;
        res.status(200).json({
            'success' : true ,
            'users' : allUsers ,
        })
    }
    catch(error) {
        res.status(404).json({
            'success' : false ,
            'error' : error ,
        }) ;
    }
}

//! function for getting a specifig user :
const getUser = async (req , res) => {
    try {
        const { id } = req.params ;
        const user = await userModel.findById( id ) ;
        res.status(200).json({user : user}) ;
    }
    catch(error) {
        res.status(404).json({
            'success' : false ,
            'error' : error ,
        }) ;
    }
}

//! function for upadating an user :
const updateUser = async (req , res) => {
    try {
        const { _id } = req.user ; //? (req.user) it means that th user authentificated can update his information
        await userModel.findByIdAndUpdate( _id , {
            first_name : req.body.first_name ,
            last_name : req.body.last_name ,
            email : req.body.email ,
            password : req.body.password 
        } ) ;
        res.status(200).json({
            'success' : true ,
            'message' : 'the user has been updated with success' ,
        })
    }
    catch(error) {
        res.status(404).json({
            'success' : false ,
            'error' : error ,
        }) ;
    }
}

//! function for deleting an user :
const deleteUser = async (req , res) => {
    try {
        const { id } = req.params ;
        await userModel.findByIdAndDelete( id ) ;
        res.status(200).json({
            'success' : true ,
            'message' : 'the user has been deleted with success' ,
        })
    }
    catch(error) {
        res.status(404).json({
            'success' : false ,
            'error' : error ,
        }) ;
    }
}

//! function for blocking an user :
const blockUser = async (req , res) => {
    try {
        const { id } = req.params ;
        await userModel.findByIdAndUpdate(id , {isBlocked : true}) ;
        res.status(200).json({
            'success' : true ,
            'message' : 'the user has been blocked with success' ,
        })
    }
    catch(error) {
        res.status(404).json({
            'success' : false ,
            'error' : error ,
        }) ;
    }
}

//! function for unblocking an user :
const unblockUser = async (req , res) => {
    try {
        const { id } = req.params ;
        await userModel.findByIdAndUpdate(id , {isBlocked : false}) ;
        res.status(200).json({
            'success' : true ,
            'message' : 'the user has been unblocked with success' ,
        })
    }
    catch(error) {
        res.status(404).json({
            'success' : false ,
            'error' : error ,
        }) ;
    }
}

module.exports = { 
    createUser , 
    loginUser ,
    getUser , 
    getAllUsers , 
    updateUser ,
    deleteUser ,
    blockUser ,
    unblockUser ,
} ;