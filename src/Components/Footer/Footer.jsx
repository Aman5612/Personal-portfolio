import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Aman Tiwari
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/amantiwari85.5" target="blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/amantiwari7755" target="blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/AmanTiw78446452" target="blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} Aman Tiwari. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
