import axios from 'axios';

// Function to fetch total passengers from the backend API
export const getTotalPassengersFromDatabase = async () => {
  try {
    // Fetch all passengers from the backend API
    const response = await axios.get('http://localhost:5000/passengers');
    
    // Calculate the total face count by summing up the face_count field of each passenger
    const totalFaceCount = response.data.reduce((total, passenger) => {
      return total + passenger.face_count;
    }, 0);
    
    return totalFaceCount; // Return the total face count
  } catch (error) {
    throw new Error('Failed to fetch total passengers: ' + error.message);
  }
};

// Controller function to fetch all passengers
export const getAllPassengers = async () => {
    try {
        const response = await axios.get('http://localhost:5000/passengers');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch passengers: ' + error.message);
    }
};

// Controller function to create a new passenger
export const createPassenger = async (newPassengerData) => {
    try {
        const response = await axios.post('http://localhost:5000/passengers', newPassengerData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create passenger: ' + error.message);
    }
};

// Other API functions as needed (update, delete, etc.)
