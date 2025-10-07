import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./index.css";
import App from "./App.tsx";
import { RegisterApp } from "./Raavana-RegisterPage/RegisterApp.tsx";
import { RoutingPages } from "./StudentStaffSelectionPage/RoutingPages.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RegisterApp />
    {/* <RoutingPages/> */}
    
  </StrictMode>
);
