import React, { createContext, useContext, useState } from 'react';
import { VerificationContext } from './Verfication';
import { PhoneContext } from './Validationnumber';

export const SignupSubmitContext = createContext();

export const SignupSubmitProvider = ({ children }) => {
  const { email, handleEmailChange, error: error_mail } = useContext(VerificationContext);
  const { phoneNumber, handlePhoneChange, error: error_number } = useContext(PhoneContext);
  const [signup_result, setSignUp_Result] = useState({});

  const handleSubmit = () => {
    setSignUp_Result({ email, phoneNumber }); 
    
  };
  
  return (
    <SignupSubmitContext.Provider
      value={{
        handleSubmit,
        signup_result, 
        setSignUp_Result,
      }}
    >
      {children}
    </SignupSubmitContext.Provider>
  );
};
