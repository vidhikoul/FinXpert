import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/Home.jsx';
import Holdings from './components/Holdings.jsx';
import Dashboard from './components/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
