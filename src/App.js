import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/about';
import HarishchandragadTrek from './pages/harishchandragad';
import Kalsubai from './pages/KalsubaiTrek';
import Sandhanvalley from './pages/SandhanValley';
import Ladakh from './pages/Ladakh';
import Goa from './pages/goa';
import FloatingContactButtons from './components/floatingcontact';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About/>} /> 
        <Route path="/harishchandragad" element={< HarishchandragadTrek/>} /> 
        <Route path="/kalsubai" element={< Kalsubai/>} />
        <Route path="/sandhanvalley" element={< Sandhanvalley/>} /> 
        <Route path="/ladakh" element={< Ladakh/>} /> 
        <Route path="/goa" element={< Goa/>} /> 
      </Routes>
      <FloatingContactButtons/>
      <Footer/>
    </Router>
  );
}

export default App;
