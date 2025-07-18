import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Leadership from './pages/Leadership';
import Events from './pages/Events';
import Programs from './pages/Programs';
import Publications from './pages/Publications';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;