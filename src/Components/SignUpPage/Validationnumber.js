import React, { createContext, useState } from 'react';
import { z } from 'zod';

const phoneSchema = z.string().regex(/^\+?[0-9]{6,14}$/);

export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error_number, setError_Number] = useState(null);

  const parsePhoneNumber = (phoneNumber) => {
    try {
      phoneSchema.parse(phoneNumber);
      return { isValid: true, phoneNumber };
    } catch (error_number) {
      return { isValid: false, error_number };
    }
  };

  const handlePhoneChange = (phoneNumber) => {
    const { isValid, error_number } = parsePhoneNumber(phoneNumber);
    if (isValid) {
      setPhoneNumber(phoneNumber);
      setError_Number(null);
      console.log('Correct phoneNumber number:', phoneNumber); // Log the correct phoneNumber number to the console
    } else {
      setError_Number('Invalid phoneNumber number');
      setPhoneNumber('');
    }
  };

  return (
    <PhoneContext.Provider value={{ phoneNumber, handlePhoneChange, error_number }}>
      {children}
    </PhoneContext.Provider>
  );
};
