import React, { createContext, useState } from 'react';
import { z } from 'zod';

const emailSchema = z.string().email();

export const VerificationContext = createContext();

export const VerificationProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [error_mail, setError_Mail] = useState(null);

  const parseEmail = (email) => {
    try {
      emailSchema.parse(email);
      return { isValid: true, email };
    } catch (error_mail) {
      return { isValid: false, error_mail };
    }
  };

  const handleEmailChange = (email) => {
    const { isValid, error_mail } = parseEmail(email);
    if (isValid) {
      setEmail(email);
      setError_Mail(null); 
      console.log('Correct email:', email); // Log the correct email to the console
    } else {
      setError_Mail('wrong mail');
      setEmail('') ;
    }
  };

  return (
    <VerificationContext.Provider value={{ email, handleEmailChange, error_mail }}>
      {children}
    </VerificationContext.Provider>
  );
};