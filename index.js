
const express = require('express') ;
const app = express() ;
const dbconnect = require('./config/dbconnect');
const dotenv = require('dotenv').config() ;
const PORT = process.env.PORT || 4001 ;
const authRoute = require('./routes/authRoute.js') ;
const userManagment = require('./routes/userManagment') ;

//! Connect database
dbconnect() ;
app.use(express.json()) ;
app.listen(PORT , () => console.log(`The server is running on localhost:${PORT}`)) ;

//! Login & Register
app.post('/register' , authRoute) ;
app.post('/login' , authRoute) ;

//! User management
app.get('/users' , userManagment) ;
app.put('/user/update/:id' , userManagment) ;
app.delete('/user/delete/:id' , userManagment) ;
app.get('/user/:id' , userManagment) ;
app.put('/user/block/:id' , userManagment) ;
app.put('/user/unblock/:id' , userManagment) ;


