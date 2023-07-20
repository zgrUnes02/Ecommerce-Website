
const mongoose = require('mongoose') ;
const userSchema = new mongoose.Schema({
    first_name : {
        type : String ,
        required : [true , 'This field is required'] ,
    } ,
    last_name : {
        type : String ,
        required : [true , 'This field is required'] ,
    },
    email : {
        type : String ,
        required : [true , 'This field is required'] ,
        unique : true ,
    },
    password : {
        type : String ,
        required : [true , 'This field is required']
    }
}) ;

const userModel = mongoose.model('users' , userSchema) ;
module.exports = userModel ;