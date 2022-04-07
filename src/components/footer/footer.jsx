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
    <div className='csRadio__Footer'>
        <div className='csRadio__Footer-text'>
        <p>@2022 | CloudStaff | Mobile Team.</p>
        </div>
        <div className='csRadio__Footer-Views'>
        <p>{counter.Counter} Views</p>
        </div>
    </div>
  )
}

export default Footer