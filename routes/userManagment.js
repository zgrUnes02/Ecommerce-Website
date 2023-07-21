
const express = require('express') ;
const { getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router() ;

router.get('/users' , getAllUsers) ;
router.put('/user/update/:id' , updateUser) ;
router.delete('/user/delete/:id' , deleteUser) ;

module.exports = router ;