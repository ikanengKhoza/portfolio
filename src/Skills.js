import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <h1 className="skills" id="skills-section">Skills</h1>
      <div className="icons">
        <div>
          <img className="image-icon" src="./reacticon.png" alt="react-icon" />
          <h3>REACT</h3>
        </div>

        <div>
          <img
            className="image-icon"
            src="./javascripticon.png"
            alt="javascript-icon"
          />
          <h3>JAVASCRIPT</h3>
        </div>

        <div>
          <img className="image-icon" src="./nodejs.png" alt="node-icon" />
          <h3>NODE.JS</h3>
        </div>

        <div>
          <img className="image-icon" src="./htmlicon.png" alt="html" />
          <h3>HTML</h3>
        </div>

        <div>
          <img className="image-icon" src="./cssicon.png" alt="css-icon" />
          <h3>CSS</h3>
        </div>

        <div>
          <img
            className="image-icon"
            src="./postgresql.png"
            alt="postgresSQL"
          />
          <h3>POSTGRES SQL</h3>
        </div>

        <div>
          <img className="image-icon" src="./bootstrap.png" alt="bootstrap" />
          <h3>BOOTSTRAP</h3>
        </div>

        <div>
          <img
            className="image-icon"
            src="./materialicon.png"
            alt="material-icon"
          />
          <h3>MATERIAL UI</h3>
        </div>

        <div>
          <img className="image-icon" src="./github.png" alt="github-icon" />
          <h3>GITHUB</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
