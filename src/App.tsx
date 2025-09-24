import React from "react";
import "./App.css";
import { AuthKitProvider } from '@workos-inc/authkit-react';
import { LoginPage } from './Raavanaa-Login-Page/LoginPage';

function App() {
  return (
     <div>
         <AuthKitProvider
             clientId="client_01K54E5FHK9CE850VVJ3X864X7">
            <LoginPage/>
          </AuthKitProvider>
        </div>
  );
}

export default App;
