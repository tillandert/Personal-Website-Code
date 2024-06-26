import React from 'react';
import { useNavigate } from 'react-router-dom';

const Personal_Life = () => {
const navigate = useNavigate();

    return (
        <div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Home')}>Home</button>
            </div>

            <div style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Personal_Life;