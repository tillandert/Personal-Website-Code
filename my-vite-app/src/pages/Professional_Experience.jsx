import React from 'react';
import { useNavigate } from 'react-router-dom';

const Professional_Experience = () => {
const navigate = useNavigate();

    return (
        <div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={() => navigate('/Home')}>Home</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
            </div>

            <div style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Professional_Experience;