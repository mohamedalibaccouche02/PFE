const express = require('express');
const router = express.Router();
const louageController = require('../Controller/louageController');

// Route to create a new louage
router.post('/', louageController.createLouage);

// Route to get all louages
router.get('/', louageController.getAllLouages);

// Route to get a single louage by ID
router.get('/:id', louageController.getLouageById);

// Route to update a louage by ID
router.put('/:id', louageController.updateLouageById);

// Route to delete a louage by ID
router.delete('/:id', louageController.deleteLouageById);

module.exports = router;
