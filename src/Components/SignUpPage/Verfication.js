import React, { createContext, useState } from 'react';
import { z } from 'zod';

const emailSchema = z.string().email();

export const VerificationContext = createContext();

export const VerificationProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [errorMail, setErrorMail] = useState(null);

  const parseEmail = (email) => {
    try {
      emailSchema.parse(email);
      return { isValid: true, email };
    } catch (error) {
      return { isValid: false, error };
    }
  };

  const handleEmailChange = (email) => {
    const { isValid, error } = parseEmail(email);
    if (isValid) {
      setEmail(email);
      setErrorMail(null);
      console.log('Correct email:', email); // Log the correct email to the console
    } else {
      setErrorMail('Invalid email');
      setEmail('');
    }
  };

  return (
    <VerificationContext.Provider value={{ email, handleEmailChange, errorMail, parseEmail }}>
      {children}
    </VerificationContext.Provider>
  );
};
