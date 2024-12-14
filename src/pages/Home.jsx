import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();

    return (
        <div style={{ justifyContent: 'center' }}>
            <div style={{ marginTop: '125px' }}>
                <h1 style={{fontSize: '40px'}}>Welcome to Taylor Tillander's Personal Website!</h1>
            </div>

            <div style={{ marginTop: '150px' }}>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
            </div>
        </div>
    );
};

export default Home;