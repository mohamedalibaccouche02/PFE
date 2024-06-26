import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginPage from './Components/LoginPage/LoginPage'; 
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
import Acceuil from './Components/Acceuil/Acceuil';
import Contact from './Components/Contact/Contact';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <ChakraProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Acceuil />} /> 
            <Route path="/Loginpage" element={<LoginPage />} />  
            <Route path="/Signuppage" element={<SignUpPage />} />
            <Route path='/Home' element={<HomePage />} />
            <Route path='/income' element={<Income />} />
            <Route path='/Louages' element={<LouagesInterface />} />
            <Route path='/AjoutLouage' element={<AjoutInterface />} /> 
            <Route path='/EditLouage/:id' element={<EditLouage />} />
            <Route path='/Chauffeurs' element={<ChauffeursInterface />} />
            <Route path='/AjoutChauffeur' element={<AjoutChauffeurInterface />} /> 
            <Route path='/EditChauffeur/:id' element={<EditChauffeur />} />
            <Route path='/Calendrier' element={<SchedularInterface />} /> 
            <Route path='/Contact' element={<Contact />} /> 
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
