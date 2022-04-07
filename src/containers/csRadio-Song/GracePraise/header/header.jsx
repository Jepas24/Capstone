import React from 'react'
import '../../CSS/header-GracePraise.css';
import Image from '../../../../assets/_graceandpraise.png';
import { Link } from 'react-router-dom';
const GraisePraiseHeader = () => {

  return (
    <div className='csRadio__header' id='CloudOverDrive'>
         <div className='csRadio__header-logo-GraisePraise'>
            <img src={Image}/>
         </div>
         <div className='csRadio__header-content-GraisePraise section__padding'>
            <h1 className='csRadio__header-content-t-GraisePraise'>GRACE & PRAISE</h1> <br />
         </div>
         <div className='csRadio__header-content-text-GraisePraise section__padding'>
            <p>Uplift your sprit with mix of great hymns and praise anthems sung
              <br />across the globe. Enjoy lyrics that speak to your soul, and 
              <br /> melodies you can sing to brighten and energize you day.</p>
         </div>
         <Link to="/Grace-Praise/A"  target="_blank"><button className="csRadio__header-button-GraisePraise button2">REQUEST A SONG</button></Link>
    </div>
  )
}

export default GraisePraiseHeader