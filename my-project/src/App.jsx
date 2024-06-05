import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


import Footer from './components/Footer';
import FindYourGuru from './pages/FindYourGuru';
import HowItWorks from './pages/HowItWorks';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-your-guru" element={<FindYourGuru />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
