import './App.css';

function App() {
  return (
    <div>
      <head>
        <title>Taylor Tillander Personal Website</title>
      </head>
        <body>
          <div className="margin-top: 50px; text-align: center;">
              <h1>Welcome to Taylor Tillander's Personal Website!</h1>
          </div>

          <div className="margin-top: 20px; display: flex; justify-content: center; align-items: center;">
              <button>Professional Experience</button>
              <button>Projects</button>
              <button>Education</button>
              <button>Personal Life</button>
          </div>

          <div className="margin-top: 50px; text-align: center;">
              <p>I am currently a third-year student studying computer engineering at the University of Florida. I am interested in many areas of computer science and electrical and computer engineering. Outside of school, I am a technical supervisor at the Stephen C. O'Connell Center, UF's basketball/volleball/gymnastics arena. In my free time, I enjoy working out, running, kickboxing, tennis, and videogames.</p>
          </div>

          <div className="margin-top: 50px; display: flex; justify-content: center; align-items: center; height: 1000px;">
              <embed src="https://drive.google.com/file/d/1znxd-zL1JcuVz7zVPG7cfHsxg5BYJe2i/preview" width="800px" height="100%" />
          </div>
          <div className="margin-top: 50px; margin-bottom: 50px; text-align: center;">
              <p>More to be added soon.</p>
          </div>
      </body>
    </div>
  );
}

export default App;
