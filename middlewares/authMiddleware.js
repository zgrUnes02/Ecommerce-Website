
const userModel = require('../models/userModel.js') ; 
const jwt = require('jsonwebtoken') ;

//! authentficayion middlleware :
const authMiddleware = async (req , res , next) => {
    try {
        const authHeader = req.headers['authorization'] ;
        const token = authHeader.split(' ')['1'] ;

        if ( token ) {
            try {
                const decoded = await jwt.verify(token , process.env.JWT_SECRET) ;
                const user = await userModel.findById(decoded._id) ;
                req.user = user ;
                next() ;
            }
            catch(error) {
                res.status(404).json(error) ;
            }
        }

    }
    catch(error) {
        res.status(404).json(error) ;
    }
}

//! check if admin middlleware :
const isAdminMiddleware = async (req , res , next) => {
    try {
        const user = await req.user ;
        if ( user.role  == 'admin' ) {
            next() ;
        } 
        else {
            res.json({
                'message' : 'opps , you can not do it'
            })
        }
    }
    catch(error) {
        res.status(404).json(error) ;
    }
}

module.exports = { authMiddleware , isAdminMiddleware } ; 