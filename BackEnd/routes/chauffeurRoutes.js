const express = require('express');
const router = express.Router();
const chauffeurController = require('../Controller/chauffeurController');

// Route to create a new chauffeur
router.post('/', chauffeurController.createChauffeur);

// Route to get all chauffeurs
router.get('/', chauffeurController.getAllChauffeurs);

// Route to get a single chauffeur by ID
router.get('/:id', chauffeurController.getChauffeurById);

// Route to update a chauffeur by ID
router.put('/:id', chauffeurController.updateChauffeurById);

// Route to delete a chauffeur by ID
router.delete('/:id', chauffeurController.deleteChauffeurById);

module.exports = router;
