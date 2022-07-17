import React from 'react'
import './dashboard.css';
const Sensor = () => {
  return (
    <div className='sensor'>
      <h1>Agriculture Monitoring System</h1>
        <div className='sensor-1'>
          <div className='sensor-1-p'>
           <h4 className='soil'> Soil Moisture Value</h4>
           <h4 className='temp'> Temperature Value</h4>
          </div>
        <iframe src="https://thingspeak.com/channels/1801053/widgets/495277"></iframe>
        <iframe src="https://thingspeak.com/channels/1801053/widgets/495279"></iframe>
        </div>
        <div className='sensor-2'>
          <div className='sensor-2-p'>
           <h4 className='hum'> Humidity Value</h4>
           <h4 className='motion'> Motion Value</h4>
          </div>
        <iframe src="https://thingspeak.com/channels/1801053/widgets/495283"></iframe>
        <iframe src="https://thingspeak.com/channels/1801053/widgets/495284"></iframe>
        </div>
    </div>
  )
}

export default Sensor