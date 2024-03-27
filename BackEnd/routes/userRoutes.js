const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

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

module.exports = router;
