import React from "react";

import "./Footer.scss";
import instagram from "./instagram.svg"
import mail from "./mail.svg"
const Footer = () => {


  return (
    <footer className="footer--wrapper">
      <a href= 'https://www.instagram.com/_moreko/'rel="noreferrer" target="_blank" className="wrapperImgContact"> 
            <img className="imgFooter"  alt="instagram" src={instagram} />
            @_moreko
      </a>
      <a  href="mailto:morenojuanjose99@gmail.com" className="wrapperImgContact"> 
            <img className="imgFooter" alt="mail" src={mail} />
            morenojuanjose99@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
