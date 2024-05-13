// Filename: App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Assuming you also have a Login component
import Home from './components/Home'; // Main home component, create this if it doesn't exist
import About from './components/About';
import Profile from './components/Profile';
import FullPageLayout from './components/layout/FullPageLayout';
import NotFoundPage from './components/NotFoundPage';
import "./styles/custom.scss";

const App = () => {
  return (
    <Router>
      <FullPageLayout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </FullPageLayout>
    </Router>
  );
};

export default App;
