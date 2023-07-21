
const jwt = require('jsonwebtoken') ;

const generateToken = (_id) => jwt.sign({_id} , process.env.JWT_SECRET , {expiresIn : '3d'}) ;

module.exports = generateToken ;
