import React from 'react';
import { useNavigate } from 'react-router-dom';

const Education = () => {
const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
                <button onClick={() => navigate('/Projects')}>Projects</button>
            </div>

            <div style={{ marginTop: '50px' }}>
                <p>
                    I am currently a fourth-year student studying computer engineering at the University of Florida. I am interested
                    in many areas of computer science and electrical and computer engineering, namely software engineering, signal processing, and AI.
                </p>
            </div>
        </div>
    );
};

export default Education;