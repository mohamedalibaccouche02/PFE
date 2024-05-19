import axios from "axios";

// Define the base URL for API calls
const BASE_URL = 'http://192.168.1.12:5000/chauffeurs';

// Function to fetch all chauffeurs from the backend server
export async function fetchAllChauffeurs() {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to create a new chauffeur
export async function createChauffeur(chauffeurData) {
  try {
    const response = await axios.post(BASE_URL, chauffeurData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to update an existing chauffeur
export async function updateChauffeur(chauffeurId, updatedChauffeurData) {
  try {
    const response = await axios.put(`${BASE_URL}/${chauffeurId}`, updatedChauffeurData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to delete a chauffeur by ID
export async function deleteChauffeur(chauffeurId) {
  try {
    const response = await axios.delete(`${BASE_URL}/${chauffeurId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Function to fetch a chauffeur by ID
export async function fetchChauffeurById(chauffeurId) {
  try {
    const response = await axios.get(`${BASE_URL}/${chauffeurId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}