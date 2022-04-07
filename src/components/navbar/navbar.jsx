import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/_Logo_cloudstaffradio.png';
import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='csRadio__navbar'>
      <div className='csRadio__navbar-links'>
        <div className='csRadio__navbar-links_logo'>
           <a href="/OverDrive"> <img src={logo} alt="logo"  /></a>
        </div>
        <div className='csRadio__navbar-links-container'>
          <p><Link to="/OverDrive">Cloud OverDrive</Link></p>
          <p><Link to="/UrbanMix">Urban Mix</Link></p>
          <p><Link to="/Grace&Praise">Grace & Praise</Link></p>
        </div>
      </div>
      <div className='csRadio__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="csRadio__navbar-menu_container ">
            <div className="csRadio__navbar-menu_container-links">
              <p><Link to="/OverDrive" >Cloud OverDrive</Link></p>
              <p><Link to="/UrbanMix">Urban Mix</Link></p>
              <p><Link to="/Grace&Praise">Grace & Praise</Link></p>
            </div>
        </div>
        )}  
      </div>
    </div>
    

  );
};

export default Navbar