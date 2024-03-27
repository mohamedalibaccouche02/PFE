const Louage = require('../Models/Louaje');

// Create a new louage
exports.createLouage = async (req, res) => {
  try {
    const louage = await Louage.create(req.body);
    res.status(201).json(louage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all louages
exports.getAllLouages = async (req, res) => {
  try {
    const louages = await Louage.find();
    res.status(200).json(louages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a louage by ID
exports.getLouageById = async (req, res) => {
  try {
    const louage = await Louage.findById(req.params.id);
    if (!louage) {
      return res.status(404).json({ message: 'Louage not found' });
    }
    res.status(200).json(louage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a louage by ID
exports.updateLouageById = async (req, res) => {
  try {
    const { id } = req.params;
    const louage = await Louage.findByIdAndUpdate(id, req.body, { new: true });
    if (!louage) {
      return res.status(404).json({ message: `Cannot find any louage with ID ${id}` });
    }
    res.status(200).json(louage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a louage by ID
exports.deleteLouageById = async (req, res) => {
  try {
    const { id } = req.params;
    const louage = await Louage.findByIdAndDelete(id);
    if (!louage) {
      return res.status(404).json({ message: `Cannot find any louage with ID ${id}` });
    }
    res.status(200).json({ message: 'Louage deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
