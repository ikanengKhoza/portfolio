import Button from "@mui/material/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-level">
      <h1>Hello I'm Ika | Software Developer</h1>
      <p className="header-paragraph">
        I'm curious, self driven full stack developer <br></br>
        who is passionate about web development
      </p>
      <div className="header-buttons">
        <Button variant="contained" color="secondary" size="small">
          Resume
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Header;
