
const express = require('express') ;
const router = express.Router() ;
const { getAllUsers, updateUser, deleteUser, getUser } = require('../controllers/userController');
const { authMiddleware, isAdminMiddleware } = require('../middlewares/authMiddleware');

router.get('/users' , getAllUsers) ;
router.get('/user/:id' , authMiddleware , isAdminMiddleware , getUser) ;
router.put('/user/update/:id' , authMiddleware , updateUser) ;
router.delete('/user/delete/:id' , deleteUser) ;

module.exports = router ;