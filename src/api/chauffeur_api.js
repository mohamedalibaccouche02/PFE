import axios from "axios"; 

// Function to fetch all chauffeurs from the backend server
export async function fetchAllChauffeurs() {
  try {
    const response = await axios.get('http://localhost:5000/chauffeurs');
    return response.data; // Assuming you want to return the data
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it outside
  }
}

// Function to create a new chauffeur
export async function createChauffeur(chauffeurData) {
  try {
    const response = await axios.post('http://localhost:5000/chauffeurs', chauffeurData);
    return response.data; // Assuming you want to return the created chauffeur
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to update an existing chauffeur
export async function updateChauffeur(chauffeurId, updatedChauffeurData) {
  try {
    const response = await axios.put(`http://localhost:5000/chauffeurs/${chauffeurId}`, updatedChauffeurData);
    return response.data; // Assuming you want to return the updated chauffeur
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to delete a chauffeur by ID
export async function deleteChauffeur(chauffeurId) {
  try {
    const response = await axios.delete(`http://localhost:5000/chauffeurs/${chauffeurId}`);
    return response.data; // Assuming you want to return some confirmation message
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to fetch a chauffeur by ID
export async function fetchChauffeurById(chauffeurId) {
  try {
    const response = await axios.get(`http://localhost:5000/chauffeurs/${chauffeurId}`);
    return response.data; // Assuming you want to return the chauffeur data
  } catch (error) {
    console.error(error);
    throw error;
  }
}
