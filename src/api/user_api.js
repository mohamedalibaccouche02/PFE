import axios from "axios"; 

// Function to fetch all users from the backend server
export async function fetchAllUsers() {
  try {
    const response = await axios.get('http://localhost:5000/users');
    return response.data; // Assuming you want to return the data
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it outside
  }
}

// Function to create a new user
export async function createUser(userData) {
  try {
    const response = await axios.post('http://localhost:5000/users', userData);
    return response.data; // Assuming you want to return the created user
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to update an existing user
export async function updateUser(userId, updatedUserData) {
  try {
    const response = await axios.put(`http://localhost:5000/users/${userId}`, updatedUserData);
    return response.data; // Assuming you want to return the updated user
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to delete a user by ID
export async function deleteUser(userId) {
  try {
    const response = await axios.delete(`http://localhost:5000/users/${userId}`);
    return response.data; // Assuming you want to return some confirmation message
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to fetch a user by ID
export async function fetchUserById(userId) {
  try {
    const response = await axios.get(`http://localhost:5000/users/${userId}`);
    return response.data; // Assuming you want to return the user data
  } catch (error) {
    console.error(error);
    throw error;
  }
}
