import React, { createContext, useContext, useState } from 'react';
import { UsernameContext } from './UsernameContext'; 
import { PasswordContext } from './Passwordcontext';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const { password, setPassword } = useContext(PasswordContext);
    const { Username, setUsername } = useContext(UsernameContext);
    const [Resultat, setResultat] = useState({});  
    const [Message_user , setMessage_user] = useState('');
    const [Message_pass , setMessage_pass] = useState('');
    console.log(Resultat);

    const onsubmit = () => {
      if (Username.length === 0) {
        setMessage_user('Username is empty');
        setMessage_pass('');
      } else if (password.length === 0) {
        setMessage_pass('Password is empty');
        setMessage_user('');
      } else {
        setResultat({ password, Username });
        setMessage_user('');
        setMessage_pass('');
      }
    };
  
    return (
      <LoginContext.Provider value={{ 
        password, 
        setPassword,
        Username,
        setUsername,
        onsubmit,
        Resultat,
        setResultat,
        Message_user,
        Message_pass,
        setMessage_pass,
        setMessage_user
      }}>
        {children}
      </LoginContext.Provider>
    );
};
