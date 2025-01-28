import React from "react";
import { Link } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import './Footer.css'
import FAQ from "./FAQ"
import paintbrush from "./img/paintbrush.png";

const Footer = () => {
  
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="socials-icons">
          <p className="gallery-text">SOCIAL MEDIA GALLERY: </p>
          <BsInstagram className="socials" />
          <AiOutlineFacebook className="socials" />
        </div>
        <div className="links">
          <Link to="/faq" className="footer-q">
            FREQUENTLY ASKED QUESTIONS
          </Link>
        </div>
        <div className="paintbrush-img"></div>
      </div>
    </div>
  );
}

export default Footer