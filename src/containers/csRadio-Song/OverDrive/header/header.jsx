import React from 'react'
import '../../CSS/header-OverDrive.css';
import Image from '../../../../assets/_urbanmix.png';
import { Link } from 'react-router-dom';
const OverDriveHeader = () => {
  return (
    <div className='csRadio__header' id='CloudOverDrive'>
         <div className='csRadio__header-logo-OverDrive'>
            <img src={Image}/>
         </div>
         <div className='csRadio__header-content-Overdrive'>
            <h1 className='csRadio__header-content-t-Overdrive'>CLOUD OVERDRIVE</h1>

         </div>
         <div className='csRadio__header-content-text-Overdrive section__padding'>
            <p>Let good vobes music drive your day away from the daily
              <br /> stress. Match the wits of our in-house DJ's</p>
         </div>
         <Link to="/OverDrive/A"  target="_blank"> <button className="csRadio__header-button-Overdrive button2">REQUEST A SONG</button> </Link>
    </div>
  )
}

export default OverDriveHeader