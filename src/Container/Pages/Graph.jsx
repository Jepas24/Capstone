import React from 'react'
import './dashboard.css';
const Graph = () => {
  return (
    <div className='Graph'>
      <h1>Agriculture Monitoring System</h1>
      <div className='Graph-1'>
       <iframe src="https://thingspeak.com/channels/1801053/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Soil+Moisture+in+Percentage&type=step"></iframe>
        <iframe src="https://thingspeak.com/channels/1801053/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Air+Temperature+in+Celsius&type=step"></iframe>
      </div>
        <div className='Graph-2'>
        <iframe src="https://thingspeak.com/channels/1801053/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Air+Humidity+in+Percentage&type=step"></iframe>
        <iframe  src="https://thingspeak.com/channels/1801053/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Motion+Sensor&type=step"></iframe>
        </div>
    </div>
  )
}

export default Graph