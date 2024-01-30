import React from 'react';
import { Carousel } from 'flowbite-react';
const Imagetop = (props) => {
    
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
    
        width: '1300px', 
      };
    
      const imageStyle = {
        width: '1300px',
        height: '70px',
        
      };

  return (
    <div>
 <div className='flex  justify-center flex-wrap'>
      <div style={containerStyle} className='bg-red-500'>
      <img src={props.img} alt="img" style={imageStyle} />
      </div>
 
  
    </div>
    </div>
  )
}

export default Imagetop