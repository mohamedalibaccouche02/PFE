const Chauffeur = require('../Models/chauffeur');

// Function to create a new chauffeur
exports.createChauffeur = async (req, res) => {
  try {
    const chauffeur = await Chauffeur.create(req.body);
    res.status(201).json(chauffeur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all chauffeurs
exports.getAllChauffeurs = async (req, res) => {
  try {
    const chauffeurs = await Chauffeur.find();
    res.status(200).json(chauffeurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a single chauffeur by ID
exports.getChauffeurById = async (req, res) => {
  try {
    const chauffeur = await Chauffeur.findById(req.params.id);
    if (!chauffeur) {
      return res.status(404).json({ message: 'Chauffeur not found' });
    }
    res.status(200).json(chauffeur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a chauffeur by ID
exports.updateChauffeurById = async (req, res) => {
  try {
    const { id } = req.params;
    const chauffeur = await Chauffeur.findByIdAndUpdate(id, req.body, { new: true });
    if (!chauffeur) {
      return res.status(404).json({ message: `Cannot find any chauffeur with ID ${id}` });
    }
    res.status(200).json(chauffeur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to delete a chauffeur by ID
exports.deleteChauffeurById = async (req, res) => {
  try {
    const { id } = req.params;
    const chauffeur = await Chauffeur.findByIdAndDelete(id);
    if (!chauffeur) {
      return res.status(404).json({ message: `Cannot find any chauffeur with ID ${id}` });
    }
    res.status(200).json({ message: 'Chauffeur deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
