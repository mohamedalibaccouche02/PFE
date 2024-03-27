import axios from "axios"; 

// Function to fetch all louages from the backend server
export async function fetchAlllouages() {
  try {
    const response = await axios.get('http://localhost:5000/louages');
    return response.data; // Assuming you want to return the data
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it outside
  }
}

// Function to create a new louage
export async function createlouage(louageData) {
  try {
    const response = await axios.post('http://localhost:5000/louages', louageData);
    return response.data; // Assuming you want to return the created louage
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to update an existing louage
export async function updatelouage(louageId, updatedlouageData) {
  try {
    const response = await axios.put(`http://localhost:5000/louages/${louageId}`, updatedlouageData);
    return response.data; // Assuming you want to return the updated louage
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to delete a louage by ID
export async function deletelouage(louageId) {
  try {
    const response = await axios.delete(`http://localhost:5000/louages/${louageId}`);
    return response.data; // Assuming you want to return some confirmation message
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to fetch a louage by ID
export async function fetchlouageById(louageId) {
  try {
    const response = await axios.get(`http://localhost:5000/louages/${louageId}`);
    return response.data; // Assuming you want to return the louage data
  } catch (error) {
    console.error(error);
    throw error;
  }
}


