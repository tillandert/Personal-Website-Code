import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Education from './pages/Education';
import Home from './pages/Home';
import Personal_Life from './pages/Personal_Life';
import Professional_Experience from './pages/Professional_Experience';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Personal_Life" element={<Personal_Life />} />
        <Route path="/Professional_Experience" element={<Professional_Experience />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
