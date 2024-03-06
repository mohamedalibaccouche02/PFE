import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PasswordProvider } from './Components/chakra/Passwordcontext';
import { UsernameProvider } from './Components/chakra/UsernameContext';
import { LoginProvider } from './Components/chakra/Login_SubmitContext'; // Import LoginProvider

ReactDOM.render(
  <React.StrictMode>
    <PasswordProvider> {/* Wrap your component tree with PasswordProvider */}
      <UsernameProvider> {/* Wrap your component tree with UsernameProvider */}
        <LoginProvider> {/* Wrap your component tree with LoginProvider */}
          <App />
        </LoginProvider>
      </UsernameProvider>
    </PasswordProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
