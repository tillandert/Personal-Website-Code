import React from 'react';
import { useNavigate } from 'react-router-dom';

const Professional_Experience = () => {
const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <p>
                    Outside of school, I am a technical supervisor at the Stephen C. O'Connell Center, UF's basketball/volleyball/gymnastics arena. In my free time, I
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

export default Professional_Experience;