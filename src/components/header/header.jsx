import React from 'react'
import './header-Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='ams__header' id='CloudOverDrive'>
         <div className='ams__header-content'>
            <h1>Monitoring and Control System</h1>
         </div>
         <Link to="/OverDrive/A"  target="_blank"> <button className="ams__header-button button2">Log in Account</button> </Link>
    </div>
  )
}

export default Home