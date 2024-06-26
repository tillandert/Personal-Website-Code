import { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Education from './pages/Education';
import Home from './pages/Home';
import Personal_Life from './pages/Personal_Life';
import Professional_Experience from './pages/Professional_Experience';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Education />} />
    //     <Route path="/" element={<Home />} />
    //     <Route path="/" element={<Personal_Life />} />
    //     <Route path="/" element={<Professional_Experience />} />
    //     <Route path="/" element={<Projects />} />
    //   </Routes>
    // </Router>

    <div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button>Professional Experience</button>
        <button>Projects</button>
        <button>Education</button>
        <button>Personal Life</button>
      </div>

      <div style={{ marginTop: '50px', textAlign: 'center'}}>
        <h1 style={{fontSize: '30px'}}>Welcome to Taylor Tillander's Personal Website!</h1>
      </div>

      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <p>
          I am currently a third-year student studying computer engineering at the University of Florida. I am interested
          in many areas of computer science and electrical and computer engineering. Outside of school, I am a technical
          supervisor at the Stephen C. O'Connell Center, UF's basketball/volleyball/gymnastics arena. In my free time, I
          enjoy working out, running, kickboxing, tennis, and video games.
        </p>
      </div>

      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe src="https://drive.google.com/file/d/1znxd-zL1JcuVz7zVPG7cfHsxg5BYJe2i/preview" width="640" height="480" allow="autoplay"></iframe>
      </div>

      <div style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}>
        <p>More to be added soon.</p>
      </div>
    </div>
  );
};

export default App;
