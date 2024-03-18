import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PasswordProvider } from './Components/LoginPage/Passwordcontext';
import { UsernameProvider } from './Components/LoginPage/UsernameContext';
import { LoginProvider } from './Components/LoginPage/Login_SubmitContext';
import { VerificationProvider } from './Components/SignUpPage/Verfication';
import { PhoneProvider } from './Components/SignUpPage/Validationnumber';
import { SignupSubmitProvider } from './Components/SignUpPage/Signup_SubmitContext';
import { LouagesProvider } from './Components/Louages/LouagesContext';
import { ChauffeursProvider } from './Components/Chauffeurs/ChauffeurContext';
import { SlotProvider } from './Components/Schedular/SlotContext';
ReactDOM.render(
  <React.StrictMode>
    <PasswordProvider>
      <UsernameProvider>
        <LoginProvider>
          <VerificationProvider>
            <PhoneProvider>
              <SignupSubmitProvider>
                <LouagesProvider> 
                  <ChauffeursProvider>
                    <SlotProvider>
                  <App />
                  </SlotProvider>
                  </ChauffeursProvider>
                </LouagesProvider>
              </SignupSubmitProvider>
            </PhoneProvider>
          </VerificationProvider>
        </LoginProvider>
      </UsernameProvider>
    </PasswordProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
