import React, { createContext, useContext, useState } from 'react';
import { UsernameContext } from './UsernameContext'; 
import { PasswordContext } from './Passwordcontext';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const { password, setPassword } = useContext(PasswordContext);
    const { username, setUsername } = useContext(UsernameContext);
    const [Resultat, setResultat] = useState({});  
    const [Message_user , setMessage_user] = useState('');
    const [Message_pass , setMessage_pass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUsername, setLoggedInUsername] = useState('')
    console.log(Resultat);

    const onsubmit = () => {
      if (username.length === 0) {
        setMessage_user('username is empty');
        setMessage_pass('');
      } else if (password.length === 0) {
        setMessage_pass('Password is empty');
        setMessage_user('');
      } else {
        setResultat({ password, username }); 
        setMessage_user('');
        setMessage_pass(''); 
      }
    };
  
    return (
      <LoginContext.Provider
      value={{
        password,
        setPassword,
        username,
        setUsername,
        onsubmit,
        Resultat,
        setResultat,
        Message_user,
        Message_pass,
        setMessage_pass,
        setMessage_user,
        isLoggedIn,
        setIsLoggedIn,
        loggedInUsername,  
        setLoggedInUsername  
        
      }}
    >
      {children}
    </LoginContext.Provider>
    
    );
};
