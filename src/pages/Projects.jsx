import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
const navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/Education')}>Education</button>
                <button onClick={() => navigate('/Personal_Life')}>Personal Life</button>
                <button onClick={() => navigate('/Professional_Experience')}>Professional Experience</button>
            </div>

            <div style={{ marginTop: '50px' }}>
                <a href="https://github.com/tillandert" target="_blank" rel="noopener noreferrer">Click here to see my GitHub projects.</a>
            </div>

            <div style={{ marginTop: '50px', padding: '20px' }}>
                <h2>Lo-Ohm</h2>
                <p>Lo-Ohm, serves as a peer-to-peer marketplace that connects users to facilitate the rental and purchase of audio/visual equipment. It allows users to create an account that can view local (or whatever distance range the user desires) listings of audio/visual equipment for rental, exchange, or purchase. This provides a local, cost-effective, and accessible way of utilizing otherwise cost-prohibitive and inaccessible equipment for all kinds of media production, performance, or any other utilization.</p>
                
                <iframe 
                    src="DEPLOYED_WEBSITE_URL"
                    title="SWE Project"
                    width="100%"
                    height="600px"
                    style={{ border: '1px solid #ccc', borderRadius: '4px' }}
                />
                
                <div style={{ marginTop: '20px' }}>
                    <a 
                        href="https://github.com/Lo-Ohm/LoOhm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Project Source Code
                    </a>
                </div>
            </div>

            <div style={{ marginTop: '50px' }}>
                <p>More to be added soon.</p>
            </div>
        </div>
    );
};

export default Projects;