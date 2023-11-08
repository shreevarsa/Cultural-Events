import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <BsInstagram/>  <AiFillLinkedin/>  <BiLogoGmail/>  <AiOutlineYoutube/>
        </div>
        
        <p> &copy; 2021 shreevarsa.com</p>
    </div>
  )
}

export default Footer;