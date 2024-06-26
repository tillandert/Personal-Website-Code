import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Education from './pages/Education';
import Home from './pages/Home';
import Personal_Life from './pages/Personal_Life';
import Professional_Experience from './pages/Professional_Experience';
import Projects from './pages/Projects';
import './App.css';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Education />} />
        <Route path="/" element={<Personal_Life />} />
        <Route path="/" element={<Professional_Experience />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
