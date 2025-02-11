// Desc: Header component for the website

import React from "react";
import { Link } from 'react-router-dom';
import './header.css';
import { nav } from "../../../data/Data";
import logo from '../../../assets/Images/logo.png';  
import { PiDiscordLogo } from "react-icons/pi";

const Header = () => {
  return (
    <>
    <header>
      <div className="container flex">
      <div className="logo">
        <img src={logo} alt="logoimg" className="logoimg" />
      </div>
      <nav className="nav">
      <ul className="small flex">
          {nav.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
        
        <div className="icon">
        <PiDiscordLogo />
        </div>
      </div>
    </header>

    </>
    
  );
}

export default Header;
