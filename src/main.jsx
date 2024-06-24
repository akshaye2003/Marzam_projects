import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Gallery from './Components/Gallery/Gallery.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
         <Route path="/Marzam_projects/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
