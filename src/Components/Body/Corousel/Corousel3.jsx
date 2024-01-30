import React from 'react';
import { Carousel } from 'flowbite-react';
const Corousel3 = () => {

    
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
    
        width: '950px', 
      };
      const containerStyle2 = {
        display: 'flex',
        flexDirection: 'column',
        width: '350px', 
      };
    
      const imageStyle = {
        width: '500px',
        height: '200px',
        
      };

  return (
    <div>


 <div className='flex  justify-center flex-wrap' >
             <div style={containerStyle}>
             <div className="h-20 sm:h-48">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-white">
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/f1a7e722-c066-4a4e-864d-3671262e8374.png?format=avif" alt="..." />
        </div>
        <div className="flex h-full items-center justify-center bg-white">
        <img src="https://f.nooncdn.com/ads/banner-1008x1008/en_dk_uae-hero-01.1706540629.762861.png?format=avif" alt="..." />
        </div>
        <div className="flex h-full items-center justify-center bg-white">
        <img src="https://f.nooncdn.com/ads/banner-1008x1008/en_dk_ksa-hero-01%20(3).1706277280.2872682.png?format=avif" alt="..." />
        </div>
        <div className="flex h-full items-center justify-center bg-white">
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a8eac632-a5bb-4258-8edf-dc2816d2196f.png?format=avif" alt="..." />
        </div>
        <div className="flex h-full items-center justify-center bg-white">
        <img src="https://f.nooncdn.com/mpcms/EN0002/assets/aac48369-b009-4b8b-ad11-b402928bb756.png?format=avif" alt="..." />
        </div>
        <div className="flex h-full items-center justify-center bg-white">
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/83b71291-65f5-4fcc-8db8-a72d91b32426.jpg?format=avif" alt="..." />
        </div>
      </Carousel>
    </div>
      </div>
      <div style={containerStyle2}>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/9fa77bc4-04be-47ec-a433-42126343092c.png?format=avif" alt="img" className='h-24 w-96 sm:h-48' />
      </div>
 
  
    </div>
    </div>
  )
}

export default Corousel3