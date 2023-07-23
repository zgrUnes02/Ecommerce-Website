
const mongoose = require('mongoose') ;

const userSchema = new mongoose.Schema({
    first_name : {
        type : String ,
        required : [true , 'This field is required'] ,
    } ,
    last_name : {
        type : String ,
        required : [true , 'This field is required'] ,
    } ,
    email : {
        type : String ,
        required : [true , 'This field is required'] ,
        unique : true ,
    } ,
    password : {
        type : String ,
        required : [true , 'This field is required'],
    } ,
    role : {
        type : String ,
        default : 'user',
    } ,
    cart : {
        type : Array ,
        default : [] ,
    } ,
    address : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'Address' ,
        } ,
    ] ,
    wishList : [
        {
            type : mongoose.Schema.Types.ObjectId , ref : 'Product' ,
        } ,
    ] ,
    isBlocked : {
        type : Boolean ,
        default : false ,
    } ,
} , { timestamps : true } ) ;

const userModel = mongoose.model('users' , userSchema) ;
module.exports = userModel ;