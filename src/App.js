// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage'; 
import { ChakraProvider } from '@chakra-ui/react'
import { SignUpPage } from './Components/SignUpPage/SignUpPage';

function App() {
  
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />  
          <Route path="/Signuppage" element={<SignUpPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
} 
export default App ; 
