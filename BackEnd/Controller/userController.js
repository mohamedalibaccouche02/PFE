const User = require('../Models/User');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    // Create the user
    const user = await User.create(req.body);

    // Create empty arrays for louages, chauffeurs, and passengers
    user.louages = [];
    user.chauffeurs = [];
    

    // Save the user with associated data
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: `Cannot find any user with ID ${id}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: `Cannot find any user with ID ${id}` });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getUserDataAfterLogin = async (req, res) => {
  try {
    // Retrieve user data based on the user ID provided in the URL parameter
    const userId = req.params.id;
     const user = await User.findById(userId);
     if(user){
      res.status(200).json({ message: 'User data fetched after login', userId });
     }
     
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};