import React from 'react';
import carback1 from '../../../../Assests/aboutimg.jpg'

import './mainsub.css';
import { useNavigate } from 'react-router-dom';
const MainSub = () => {
const navigate = useNavigate()


  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',

    width: '600px', // Adjust the width as needed

  };
 

  const imageStyle = {
    width: '590px',
    height: '350px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#00072d',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
    <div className='flex d-flex justify-evenly align-bottom flex-wrap my-12'>
      <div style={containerStyle} >
<h1 className='text-3xl lg:text-9xl md:text-7xl sm:text-5xl font-extrabold mb-9 txtcolor'>Welcome To </h1>
<h1 className='text-6xl font-bold text-white'>Brighton Car Sales</h1>

      </div>
      <div style={containerStyle} className='imgback'>

<button className='buttonstyles text-2xl opacity-90 txthover' onClick={()=> {navigate("/stock")}}>Browse Our Latest Cars</button>


      </div>


      
    </div>
  );
}

export default MainSub;
