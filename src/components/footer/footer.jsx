import React,{useState,useEffect} from 'react'
import './footer.css';

const Footer = () => {
  const [counter, setCounter] = useState({});
  const countapi = require('countapi-js');
  useEffect(() =>{
    countapi.hit('radioCloudstaff', '31c55292-5df2-422d-8ded-ad488fce3089').then((result) => { 
      const Counter = result.value;
      console.log(Counter);
      setCounter({Counter}); });
  },[])
  return (
    
    <div className='ams__Footer' id='ams_Footer-link'>
        <div className='ams_icon'>
          <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-square icon"></i></a>
          <a href="https://www.instagram.com/?hl=en" target="_blank"><i className="fa fa-instagram icon"></i></a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><i className="fa fa-google icon"></i></a>
          <a href="https://twitter.com/i/flow/login"  target="_blank"><i className="fa fa-twitter icon"></i></a>
          <a href="https://www.youtube.com/" target="_blank"> <i class="fa fa-youtube icon"></i></a>
       </div>
       <div className='ams_footer-content'>
          <div className='ams_footer-content-aboutus'>
              <p>An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty.
                 An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose 
                 and how it differs from the competition, and encourage discussion and interaction.
                 Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd</p>
          </div>
          <div className='ams_footer-content-contactus'>
              <p>An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty.
                 An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose 
                 and how it differs from the competition, and encourage discussion and interaction.
                 Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd</p>
          </div>
       </div>
       <div className='ams_footer-box'>
        <div className='ams__Footer-text'>
        <p>@2022 | City College Of San Fernando Pampanga</p>
        </div>
        <div className='ams__Footer-Views'>
        <p>{counter.Counter} Views</p>
        </div>
        </div>
    </div>
  )
}

export default Footer