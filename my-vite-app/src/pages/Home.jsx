import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();

    return (
        <div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
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

            <div style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Home;