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

            <div style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Home;