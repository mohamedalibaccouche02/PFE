const express = require('express');
const router = express.Router();
const passengerController = require('../Controller/passengerController');

// Route to create a new passenger
router.post('/', passengerController.createPassenger);

// Route to get all passengers
router.get('/', passengerController.getAllPassengers);

// Route to get a single passenger by ID
router.get('/:id', passengerController.getPassengerById);

// Route to update a passenger by ID
router.put('/:id', passengerController.updatePassengerById);

// Route to delete a passenger by ID
router.delete('/:id', passengerController.deletePassengerById);

module.exports = router;
