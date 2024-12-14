import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
const navigate = useNavigate();

    return (
        <div className="container">
            <div>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
            </div>

            <div style={{ marginTop: '50px' }}>
                <a href="https://github.com/tillandert" target="_blank" rel="noopener noreferrer">Click here to see my GitHub projects.</a>
            </div>
        </div>
    );
};

export default Projects;