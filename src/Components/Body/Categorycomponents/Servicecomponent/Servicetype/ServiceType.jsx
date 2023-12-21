import React from 'react';
import { useEffect } from 'react';
import './servicetype.css'
const ServiceType = () => {



  const divStyle = {
    width: '900px',
    flexDirection: 'row',


    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#EC0C36',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
    <div className=' flex justify-evenly mb-6'>
    <div className='maindiv flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/756/756871.png" alt="Fairs" style={imageStyle} />
        <h1>Electrician</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/756/756878.png" alt="Fairs" style={imageStyle} />
        <h1>Plumber</h1>
      </div>

      <div style={containerStyle}>
        <img src="https://cdn0.iconfinder.com/data/icons/graphic-design-tools-flat-colorful-icons-svg/137/Graphic_Design_Tools-19-512.png" alt="Fairs" style={imageStyle} />
        <h1>Painter</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732555.png" alt="Fairs" style={imageStyle} />
        <h1>Carpenter</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/4382/4382722.png" alt="Fairs" style={imageStyle} />
        <h1>Mechanic</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/5025/5025140.png" alt="Fairs" style={imageStyle} />
        <h1>Technician</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/1590/1590850.png" alt="Fairs" style={imageStyle} />
        <h1>Cleaner</h1>
      </div>
      <div style={containerStyle}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/2/1/2133.9-driving-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Driver</h1>
      </div>

      </div>      
    </div>
  );
}

export default ServiceType;
