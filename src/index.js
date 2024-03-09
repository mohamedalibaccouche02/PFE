import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PasswordProvider } from './Components/LoginPage/Passwordcontext';
import { UsernameProvider } from './Components/LoginPage/UsernameContext';
import { LoginProvider } from './Components/LoginPage/Login_SubmitContext';
import { VerificationProvider } from './Components/SignUpPage/Verfication'; 
import { PhoneProvider } from './Components/SignUpPage/Validationnumber'; 
import { SignupSubmitProvider } from './Components/SignUpPage/Signup_SubmitContext';


ReactDOM.render(
  <React.StrictMode>
    <PasswordProvider>
      <UsernameProvider>
        <LoginProvider>
          <VerificationProvider> {/* Wrap your component tree with VerificationProvider */}
          <PhoneProvider>
            <SignupSubmitProvider>
            <App />
            </SignupSubmitProvider>
            </PhoneProvider>
          </VerificationProvider>
        </LoginProvider>
      </UsernameProvider>
    </PasswordProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
