import React, { createContext, useState } from 'react';

export const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState(''); // State for password

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

  return (
    <UsernameContext.Provider value={{ 
      username ,
      setUsername ,
    }}>
      {children}
    </UsernameContext.Provider>
  );
};
