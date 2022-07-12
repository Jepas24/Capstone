import React from 'react'
import './dashboard.css';
const Sensor = () => {
  return (
    <div className='sensor'>
        <iframe  src="https://thingspeak.com/channels/1795138/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&timescale=10&type=step"></iframe>
    </div>
  )
}

export default Sensor