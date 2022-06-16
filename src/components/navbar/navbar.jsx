import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo2.png';
import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='ams__navbar'>
      <div className='ams__navbar-links'>
        <div className='ams__navbar-links_logo'>
           <a href="/Home"> <img src={logo} alt="logo"  /></a>
        </div>
        <div className='ams__navbar-links-container'>
          <p><Link to="/Home">Home</Link></p>
          <p><Link to="/AboutUS">About Us</Link></p>
          <p><Link to="/ContactUs">Contact Us</Link></p>
        </div>
      </div>
      <div className='ams__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ams__navbar-menu_container ">
            <div className="ams__navbar-menu_container-links">
            <p><Link to="/Home">Home</Link></p>
            <p><Link to="/AboutUS">About Us</Link></p>
              <p><Link to="/ContactUs">Contact Us</Link></p>
            </div>
        </div>
        )}  
      </div>
    </div>
    

  );
};

export default Navbar