
const mongoose = require('mongoose') ;
const bcrypt = require('bcrypt') ;

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
        required : [true , 'This field is required']
    } ,
    role : {
        type : String ,
        default : 'user'
    }
}) ;

// //! bcrypt the password :
// userSchema.pre('save' , async function (next) {
//     try {
//         const salt = await bcrypt.genSaltSync(10) ;
//         const hashedPassword = await bcrypt.hashSync(this.password , salt) ;
//         this.password = hashedPassword ;
//         next() ;
//     }
//     catch(error) {
//         res.status(401).json(next(error)) ;
//     }
// }) ;

// //! comparing password :
// userSchema.methods.isPasswordMatched = async function (entredPassword) {
//     return await bcrypt.compare(entredPassword , this.password) ;
// }

const userModel = mongoose.model('users' , userSchema) ;
module.exports = userModel ;