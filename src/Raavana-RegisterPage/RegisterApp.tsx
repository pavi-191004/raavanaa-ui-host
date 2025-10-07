import { AuthKitProvider } from "@workos-inc/authkit-react";
import { RegisterButton } from "./RegisterButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";

export const RegisterApp = () => {
  return (
    <div>
      <AuthKitProvider clientId="client_01K54E5FHK9CE850VVJ3X864X7">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterButton/>}></Route>
          <Route path="/homePage" element={<HomePage/>}></Route>
        </Routes>
        </BrowserRouter>
        
      </AuthKitProvider>
    </div>
  );
};
