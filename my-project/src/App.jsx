import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FindYourGuru from './pages/FindYourGuru';
import HowItWorks from './pages/HowItWorks';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import BecomeAGuru from './pages/BecomeAGuru'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-your-guru" element={<FindYourGuru />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/become-a-guru" element={<BecomeAGuru />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
