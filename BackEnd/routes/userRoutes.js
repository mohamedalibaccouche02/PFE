const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
// const authenticateToken = require('../authMiddleware');


// Route to create a new user
router.post('/', userController.createUser);

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a single user by ID
router.get('/:id', userController.getUserById);

// Route to update a user by ID
router.put('/:id', userController.updateUserById);

// Route to delete a user by ID
router.delete('/:id', userController.deleteUserById);

// // Route to fetch user data after login
// router.get('/user-data/:id', userController.getUserDataAfterLogin);

// // Route to get user data after login
// router.get('/user-data', authenticateToken, userController.getUserData);

module.exports = router;
