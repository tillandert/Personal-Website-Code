import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Education from './components/Education';
import Home from './components/Home';
import PersonalLife from './components/PersonalLife';
import ProfessionalExperience from './components/ProfessionalExperience';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/personal-life" element={<PersonalLife />} />
          <Route path="/experience" element={<ProfessionalExperience />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/Education" element={<Navigate to="/education" replace />} />
        <Route path="/Personal_Life" element={<Navigate to="/personal-life" replace />} />
        <Route path="/Professional_Experience" element={<Navigate to="/experience" replace />} />
        <Route path="/Projects" element={<Navigate to="/projects" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
