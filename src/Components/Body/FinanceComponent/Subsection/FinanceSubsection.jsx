import React from 'react';
import img1 from '../../../../Assests/finance1.webp'
const FinanceSubsection = () => {



  const divStyle = {
    backgroundColor: '#010203'
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
marginBottom: "30px",
marginTop: '20px',
    borderRadius: '8px',
    width: '650px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '600px',
    height: '400px',
    marginBottom: '16px',
  };

  const textcolor = {
    color: '#E5A317',

  };

  return (
    <div className='flex  justify-evenly flex-wrap my-4' style={divStyle}>
      <div style={containerStyle}>
        <h1 className='text-5xl font-bold mb-8' style={textcolor}>Finance Option</h1>
        <p className='text-lg'>We understand that purchasing a car can be a significant investment. Our team of salespeople are trained and experienced in writing finance and are dedicated to finding you the best options tailored to your needs.</p>
      </div>
      <div style={containerStyle}>
        <img src={img1} alt="Fairs" style={imageStyle} />

      </div>



      
    </div>
  );
}

export default FinanceSubsection;
