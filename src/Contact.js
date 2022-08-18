import React from "react";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact-section">
        <img src="./github.png" alt="github link" />
        <Button href="https://github.com/ikanengKhoza" variant="contained" color="secondary" size="small">
          github
        </Button>
        <EmailIcon />
        <p>ikaneng.khoza@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
