
const express = require('express') ;
const router = express.Router() ;
const { getAllUsers, updateUser, deleteUser, getUser } = require('../controllers/userController');

router.get('/users' , getAllUsers) ;
router.put('/user/update/:id' , updateUser) ;
router.delete('/user/delete/:id' , deleteUser) ;
router.get('/user/:id' , getUser) ;

module.exports = router ;