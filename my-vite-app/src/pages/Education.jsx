import React from 'react';
import { useNavigate } from 'react-router-dom';

const Education = () => {
const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <p>
                    I am currently a third-year student studying computer engineering at the University of Florida. I am interested
                    in many areas of computer science and electrical and computer engineering.
                </p>
            </div>

            <div style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'center' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Education;