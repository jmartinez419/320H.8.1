import { StrictMode } from 'react'
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//import browserrouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
    <App />
    </Router>
  </StrictMode>,
)
