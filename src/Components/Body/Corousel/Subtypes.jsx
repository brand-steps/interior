import React from 'react';
import { Card } from 'flowbite-react';

const Subtypes = () => {



  const divStyle = {
    backgroundColor: "#feee00"
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    width: '400px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '180px',
    height: '200px',
    marginBottom: '16px',
  };
  const imageStyle2 = {
    width: '400px',
    height: '200px',
    marginBottom: '16px',
  };



  return (
    <div className='flex  justify-evenly flex-wrap'>
        
             <div style={containerStyle}>
                <div className='bg-slate-50 '>
                <p className='text-black font-bold text-xl mt-3 ml-4'>More Reason to shop</p>
                    <div className='inline-block ml-3 mt-4'>
             <img src="https://f.nooncdn.com/mpcms/EN0001/assets/d5ea7157-ef25-4dcd-bfdb-167e97b8923f.png?format=avif"  alt="Fairs" style={imageStyle} />
             </div>
             <div className='inline-block ml-3'>
             <img src="https://f.nooncdn.com/mpcms/EN0001/assets/cee908c3-d779-4157-81fc-9758f28fa91d.png?format=avif"  alt="Fairs" style={imageStyle} />
             </div>
             <div className='inline-block ml-3'>
             <img src="https://f.nooncdn.com/mpcms/EN0001/assets/846500f2-70b4-4382-99ed-05cbe4eb79e9.png?format=avif" className='inline' alt="Fairs" style={imageStyle} />
             </div>
             <div className='inline-block ml-3'>
             <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2c9c92a4-a051-474d-952d-c58140fd48c0.png?format=avif" className='inline' alt="Fairs" style={imageStyle} />
             </div>
             </div>

            </div>
            <div style={containerStyle} className='bg-red-500 '>
                <div className='bg-yellow-100 '>
                <p className='text-black font-bold text-xl mt-3 ml-4'>Mega Deals</p>
                    <div className='inline-block ml-3 mt-4'>
             <img src="https://f.nooncdn.com/mpcms/EN0001/assets/d5ea7157-ef25-4dcd-bfdb-167e97b8923f.png?format=avif"  alt="Fairs" style={imageStyle} />
             </div>
             <div className='inline-block ml-3'>
             <img src="https://f.nooncdn.com/mpcms/EN0001/assets/cee908c3-d779-4157-81fc-9758f28fa91d.png?format=avif"  alt="Fairs" style={imageStyle} />
             </div>
             <div className='inline-block ml-3'>
             <img src="https://f.nooncdn.com/mpcms/EN0001/assets/846500f2-70b4-4382-99ed-05cbe4eb79e9.png?format=avif" className='inline' alt="Fairs" style={imageStyle} />
             </div>
             <div className='inline-block ml-3'>
             <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2c9c92a4-a051-474d-952d-c58140fd48c0.png?format=avif" className='inline' alt="Fairs" style={imageStyle} />
             </div>
             </div>

            </div>
            <div style={containerStyle} className='bg-red-500 '>
                <div className='bg-slate-50 '>
                <p className='text-black font-bold text-xl mt-3 ml-4 ml-4'>In Focus</p>
                    <div className='inline ml-3'>
             <img src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-01%20(17).1705924730.3051121.png?format=avif"  alt="Fairs" style={imageStyle2} className='rounded-xl'/>
             </div>
            
             <div className='inline '>
             <img src="https://f.nooncdn.com/ads/banner-410x410/SGE_Top_Fold_2_410x195_EN.1706269483.2315223.png?format=avif" className='inline' alt="Fairs" style={imageStyle2} />
             </div>
             
             </div>

            </div>
  

    </div>
  );
}

export default Subtypes;
