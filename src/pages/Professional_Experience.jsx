import React from 'react';
import { useNavigate } from 'react-router-dom';

const Professional_Experience = () => {
const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
            </div>

            <div style={{ marginTop: '50px' }}>
                <p>
                    Outside of school, I am a technical supervisor at the Stephen C. O'Connell Center, UF's basketball/volleyball/gymnastics arena. I have also had two software engineering internships the past couple summers, first at Datamaxx doing primarily frontend development and then at Kratos doing scripting to run simulations.
                </p>
            </div>

            <div style={{ marginTop: '50px' }}>
                <a href="https://www.linkedin.com/in/taylortillander/" target="_blank" rel="noopener noreferrer">Click here to visit my LinkedIn page.</a>
            </div>

            <div style={{ marginTop: '50px' }}>
                <iframe src="https://drive.google.com/file/d/1znxd-zL1JcuVz7zVPG7cfHsxg5BYJe2i/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>

            <div style={{ marginTop: '50px' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Professional_Experience;