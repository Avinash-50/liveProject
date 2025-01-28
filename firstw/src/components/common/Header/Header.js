
import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import { nav } from "../../../data/Data";
import logo from '../../../assets/Images/logo.png';  // Correct relative path
import { PiDiscordLogo } from "react-icons/pi";

const Header = () => {
  return (
    <header>
      <nav className="Navbar">
      <div className="Image">
        <img src={logo} alt="logoimg" className="logoimg" />
      </div>
        <ul>
          {nav.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div>
        <PiDiscordLogo />
        </div>
      </nav>
    </header>
  );
}

export default Header;
