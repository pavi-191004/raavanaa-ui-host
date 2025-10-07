import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { LoginApp } from "./Raavanaa-LoginPage/LoginApp.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginApp />
  </StrictMode>
)
