import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            
            <Route path="/pets" element={<div>Find a Pet</div>} />
            
            <Route path="/adopt" element={<div>How to Adopt</div>} />
            
            <Route path="/stories" element={<div>Success Stories</div>} />
            
            <Route path="/about" element={<div>About Us</div>} />
            
            <Route path="/contact" element={<div>Contact</div>} />
            
            <Route path="/volunteer" element={<div>Volunteer</div>} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;