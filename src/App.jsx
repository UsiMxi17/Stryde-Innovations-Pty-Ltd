import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Solutions from './pages/Solutions';
import Insight from './pages/Insight';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<AboutUs />}/>
            <Route path="/solutions" element={<Solutions />}/>
            <Route path="/insight" element={<Insight />}/>
            <Route path="/contact" element={<ContactUs />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
