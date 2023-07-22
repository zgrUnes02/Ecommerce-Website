
const express = require('express') ;
const app = express() ;
const dbconnect = require('./config/dbconnect');
const dotenv = require('dotenv').config() ;
const PORT = process.env.PORT || 4001 ;
const authRoute = require('./routes/authRoute.js') ;
const userManagment = require('./routes/userManagment') ;

dbconnect() ;
app.use(express.json()) ;
app.listen(PORT , () => console.log(`The server is running on localhost:${PORT}`)) ;

app.post('/register' , authRoute) ;
app.post('/login' , authRoute) ;
app.get('/users' , userManagment) ;
app.put('/user/update/:id' , userManagment) ;
app.delete('/user/delete/:id' , userManagment) ;
app.get('/user/:id' , userManagment) ;


