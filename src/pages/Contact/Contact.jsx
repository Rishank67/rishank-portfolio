import { NavLink } from "react-router-dom";
import "./Contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
export const Contact = () => {
  return (
    <div className="contact container">
      <h1>CONTACT</h1>
      <div className="contact-info">
        <div className="contact-heading">
          <h2>Get in Touch</h2>
          <p>
            I'm open to opportunities or collaborations. Feel free to reach out!
          </p>
          <p className="mail">Mail: rishank.uiet@gmail.com</p>
        </div>
        <div className="contact-links">
          <NavLink
            to="https://github.com/Rishank67"
            target="_blank"
            className="contact-icon"
          >
            <BsGithub />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/rishank-uiet/"
            target="_blank"
            className="contact-icon"
          >
            <BsLinkedin />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/rishank.1912?igsh=MW55bXptam42YzBvdA=="
            target="_blank"
            className="contact-icon"
          >
            <FaInstagram />
          </NavLink>
        </div>
        <div className="footer">
          <p>Designed and Developed by Rishank</p>
          <p>© Copyright 2025</p>
        </div>
      </div>
    </div>
  );
};
