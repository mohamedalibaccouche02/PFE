import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage'; 
import { ChakraProvider } from '@chakra-ui/react'
import { SignUpPage } from './Components/SignUpPage/SignUpPage';
import HomePage from './Components/HomePage/HomePage'; 
import Income from './Components/HomePage/Income';
import LouagesInterface from './Components/Louages/LouagesInterface';
import AjoutInterface from './Components/Louages/AjoutInterface'; 
import EditLouage from './Components/Louages/EditLouage';
import ChauffeursInterface from './Components/Chauffeurs/ChauffeursInterface';
import AjoutChauffeurInterface from './Components/Chauffeurs/AjoutChauffeurInterface';
import EditChauffeur from './Components/Chauffeurs/EditChauffeur';
import SchedularInterface from './Components/Schedular/SchedularInterface';

function App() {
  
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />  
          <Route path="/Signuppage" element={<SignUpPage />} />
          <Route path='/Home' element={(<HomePage />)} />
          <Route path='/income' element={(<Income />)} />
          <Route path='/Louages' element={(<LouagesInterface />)} />
          <Route path='/AjoutLouage' element={(<AjoutInterface />)} /> 
          <Route path='/EditLouage/:id' element={(<EditLouage />)} /> {/* Make the route dynamic */}
          <Route path='/Chauffeurs' element={(<ChauffeursInterface />)} />
          <Route path='/AjoutChauffeur' element={(<AjoutChauffeurInterface />)} /> 
          <Route path='/EditChauffeur/:nom' element={(<EditChauffeur />)} />
          <Route path='/Calendrier' element={(<SchedularInterface />)} /> 
        </Routes>
      </Router>
    </ChakraProvider>
  )
} 
export default App;
