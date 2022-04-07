import React from 'react'
import '../../CSS/header-UrbanMix.css';
import Image from '../../../../assets/_urbanmix.png';
import { Link } from 'react-router-dom';
const UrbanMixHeader = () => {
  return (
    <div className='csRadio__header' id='CloudOverDrive'>
         <div className='csRadio__header-logo-Urbanmix'>
            <img src={Image}/>
         </div>
         <div className='csRadio__header-content-UrbanMix'>
            <h1 className='csRadio__header-content-t-UrbanMix' >URBAN MIX</h1> <br />
         </div>
         <div className='csRadio__header-content-text-Urbanmix section__padding'>
                    <p>Your ,usic channel that gives you the top treats of Hip Hop and
                    <br /> R&B hits. From A to Z, from dre to D-O-double G, from Nice
                    <br /> and Slow to Ridin' Solo.</p>
         </div>
         <Link to="/UrbanMix/A"  target="_blank"><button className="csRadio__header-button-Urbanmix button2">REQUEST A SONG</button></Link>
    </div>
  )
}

export default UrbanMixHeader