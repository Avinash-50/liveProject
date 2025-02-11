import React from "react"
import { footer } from "../../../data/Data";
import logo from '../../../assets/Images/logo.png'; 
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
               <img src={logo} alt="logoimg" className="logoimg" />
              <h2>Do You Need Help With Anything?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

             
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>Picasso @ 2024. All rights reserved.</span>
      </div>
    </>
  )
}

export default Footer
