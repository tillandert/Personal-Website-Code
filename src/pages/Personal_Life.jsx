import React from 'react';
import { useNavigate } from 'react-router-dom';

const Personal_Life = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
            </div>

            <div style={{ marginTop: '50px' }}>
                <p>
                    In my free time, I enjoy working out, running, kickboxing, tennis, and video games. I have recently broken a sub six minute mile and am working on breaking a sub 20 minute 5k while still building muscle and going to the gym consistently.
                </p>
            </div>

            <div style={{ marginTop: '50px' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Personal_Life;