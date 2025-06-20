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
import Hampi from './pages/hampi';
import Contactus from './pages/Contactus';
import NanemachiTrek from './pages/nanemachi';
import DevkundTrek from './pages/devkund';
import AndharbanJungleTrek from './pages/andharban';
import UpcomingAdventuresSection from './components/upcomingadventures';



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
        <Route path="/hamp" element ={<Hampi/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/nanemachi" element={< NanemachiTrek/>} /> 
        <Route path="/devkund" element={< DevkundTrek/>} />
        <Route path="/andharban" element={< AndharbanJungleTrek/>} />
        <Route path="#upcomingadventures" element={< UpcomingAdventuresSection/>} />
         

      </Routes>
      <FloatingContactButtons/>
      <Footer/>
    </Router>
  );
}

export default App;
