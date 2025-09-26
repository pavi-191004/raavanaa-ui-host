import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RegisterApp } from "./Raavana-RegisterPage/RegisterApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RegisterApp />
  </StrictMode>
);
