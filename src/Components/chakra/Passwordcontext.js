import React, { createContext, useState } from 'react';

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false); 
  const [password, setPassword] = useState(''); // State for password

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordContext.Provider value={{ 
      showPassword, 
      togglePasswordVisibility, 
      password, 
      setPassword  ,// Include setPassword in the context value
      setShowPassword,
    }}>
      {children}
    </PasswordContext.Provider>
  );
};
