
const express = require('express') ;
const router = express.Router() ;
const { getAllUsers, updateUser, deleteUser, getUser, blockUser, unblockUser } = require('../controllers/userController');
const { authMiddleware, isAdminMiddleware } = require('../middlewares/authMiddleware');

router.get('/users' , getAllUsers) ;
router.get('/user/:id' , authMiddleware , isAdminMiddleware , getUser) ;
router.put('/user/update/:id' , authMiddleware , updateUser) ;
router.delete('/user/delete/:id' , authMiddleware , isAdminMiddleware , deleteUser) ;
router.put('/user/block/:id' , authMiddleware , isAdminMiddleware , blockUser) ;
router.put('/user/unblock/:id' , authMiddleware , isAdminMiddleware , unblockUser) ;

module.exports = router ;