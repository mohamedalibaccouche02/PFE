import React, { createContext, useState } from 'react';
import { z } from 'zod';

const phoneSchema = z.string().regex(/^\+?[0-9]{6,14}$/);

export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorNumber, setErrorNumber] = useState(null);

  const parsePhoneNumber = (phoneNumber) => {
    try {
      phoneSchema.parse(phoneNumber);
      return { isValid: true, phoneNumber };
    } catch (error) {
      return { isValid: false, error };
    }
  };

  const handlePhoneChange = (phoneNumber) => {
    const { isValid, error } = parsePhoneNumber(phoneNumber);
    if (isValid) {
      setPhoneNumber(phoneNumber);
      setErrorNumber(null);
      console.log('Correct phone number:', phoneNumber); // Log the correct phone number to the console
    } else {
      setErrorNumber('Invalid phone number');
      setPhoneNumber('');
    }
  };

  return (
    <PhoneContext.Provider value={{ phoneNumber, handlePhoneChange, errorNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};
