import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
