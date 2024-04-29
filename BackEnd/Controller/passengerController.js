const Passengers = require('../Models/passengers');
const Louage = require('../Models/Louaje');

// Function to link passengers to louages
const linkPassengersToLouages = async () => {
    try {
      // Query all passengers
      const passengers = await Passengers.find();
  
      // Iterate over passengers and link them to louages
      for (const passenger of passengers) {
        // Find the louage with matching raspberryID
        const louage = await Louage.findOne({ raspberryID: passenger.raspberryID });
        if (louage) {
          // Check if the passenger ID already exists in the louage's passengers array
          const passengerExists = louage.passengers.some(passengerId => passengerId.equals(passenger._id));
          if (!passengerExists) {
            // Add passenger to louage's passengers array
            louage.passengers.push(passenger._id);
            await louage.save();
          }
        }
      }
    } catch (error) {
      console.error('Error linking passengers to louages:', error);
      throw error;
    }
  };

// Controller function to fetch all passengers
const getAllPassengers = async (req, res) => {
  try {
    const passengers = await Passengers.find();
    res.json(passengers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new passenger
const createPassenger = async (req, res) => {
  const passenger = new Passengers({
    face_count: req.body.face_count,
    time: req.body.time,
    raspberryID: req.body.raspberryID
  });

  try {
    const newPassenger = await passenger.save();

    // Call the function to link passengers to louages
    await linkPassengersToLouages();

    res.status(201).json(newPassenger);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get a single passenger by ID
const getPassengerById = async (req, res) => {
  try {
    const passenger = await Passengers.findById(req.params.id);
    if (!passenger) {
      return res.status(404).json({ message: 'Passenger not found' });
    }
    res.json(passenger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a passenger by ID
const updatePassengerById = async (req, res) => {
  try {
    const updatedPassenger = await Passengers.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPassenger) {
      return res.status(404).json({ message: 'Passenger not found' });
    }
    res.json(updatedPassenger);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a passenger by ID
const deletePassengerById = async (req, res) => {
  try {
    const deletedPassenger = await Passengers.findByIdAndDelete(req.params.id);
    if (!deletedPassenger) {
      return res.status(404).json({ message: 'Passenger not found' });
    }
    res.json({ message: 'Passenger deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPassengers,
  createPassenger,
  getPassengerById,
  updatePassengerById,
  deletePassengerById
  // Add other controller functions here
};
