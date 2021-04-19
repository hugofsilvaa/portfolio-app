import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <IconContext.Provider value={{ size: "1.5rem", color: "white" }}>
          <Link to='#' className='social-icons'>
            <FaInstagram />
          </Link>
          <Link to='#' className='social-icons'>
            <FaGithub />
          </Link>
          <Link to='#' className='social-icons'>
            <FaFacebook />
          </Link>
          <Link to='#' className='social-icons'>
            <FaLinkedin />
          </Link>
          <Link to='#' className='social-icons'>
            <FaYoutube />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
}
