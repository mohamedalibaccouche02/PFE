import React, { createContext, useState } from 'react';

export const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
  const [Username, setUsername] = useState(''); // State for password

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

  return (
    <UsernameContext.Provider value={{ 
      Username ,
      setUsername ,
    }}>
      {children}
    </UsernameContext.Provider>
  );
};
