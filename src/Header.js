import Button from "@mui/material/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-level">
      <h1>Hello I'm Ika</h1>
      <img src="./pro.jpg" alt="profile-pic" className="pic-pro"/>
      <p>I create software applications</p>
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
