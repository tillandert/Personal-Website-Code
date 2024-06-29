import React from 'react';
import { useNavigate } from 'react-router-dom';

const Personal_Life = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <p>
                    In my free time, I enjoy working out, running, kickboxing, tennis, and video games.
                </p>
            </div>

            <div style={{ marginTop: '50px' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Personal_Life;