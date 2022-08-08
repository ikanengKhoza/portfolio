import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div className="icons">
        <div>
          <img className="image-icon" src="./reacticon.png" alt="react-icon" />
          REACT
        </div>

        <div>
          <img
            className="image-icon"
            src="./javascripticon.png"
            alt="javascript-icon"
          />
          JAVASCRIPT
        </div>

        <div>
          <img className="image-icon" src="./nodejs.png" alt="node-icon" />
          NODE.js
        </div>

        <div>
          <img className="image-icon" src="./htmlicon.png" alt="html" />
          HTML
        </div>

        <div>
          <img className="image-icon" src="./cssicon.png" alt="css-icon" />
          CSS
        </div>

        <div>
          <img
            className="image-icon"
            src="./postgresql.png"
            alt="postgresSQL"
          />
          POSTGRES SQL
        </div>

        <div>
          <img className="image-icon" src="./bootstrap.png" alt="bootstrap" />
          bootstrap
        </div>

        <div>
          <img
            className="image-icon"
            src="./materialicon.png"
            alt="material-icon"
          />
          material ui
        </div>

        <div>
          <img className="image-icon" src="./github.png" alt="github-icon" />
          github
        </div>
      </div>
    </div>
  );
};

export default Skills;
