// Sign_Up.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { VerificationContext } from './Verfication';
import { PhoneContext } from './Validationnumber';
import { createUser } from '../../api/user_api';

export const SignupSubmitContext = createContext();

export const SignupSubmitProvider = ({ children }) => {
  const { email } = useContext(VerificationContext);
  const { phoneNumber } = useContext(PhoneContext);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { parseEmail } = useContext(VerificationContext);
  const { isValid } = parseEmail(email);
  const [obj, setObj] = useState({});

  const { validNumber } = parseInt(phoneNumber);

  return (
    <SignupSubmitContext.Provider
      value={{
        // handleSubmit,
        setUsername,
        setPassword,
        setError,
        email,
        password,
        phoneNumber,
        username,
        obj,
        setObj
      }}
    >
      {children}
    </SignupSubmitContext.Provider>
  );
};
