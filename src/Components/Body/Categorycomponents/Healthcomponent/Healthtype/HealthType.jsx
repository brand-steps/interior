import React from 'react';
import { useEffect } from 'react';
import './healthtype.css'
const HealthType = () => {



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
        <img src="https://cdn-icons-png.flaticon.com/512/745/745435.png" alt="Fairs" style={imageStyle} />
        <h1>Clinics</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://static.vecteezy.com/system/resources/previews/007/925/792/original/tooth-in-circle-icon-isolated-on-white-background-free-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Dentistry</h1>
      </div>

      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/504/504061.png" alt="Fairs" style={imageStyle} />
        <h1>Doctor</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/194/194924.png" alt="Fairs" style={imageStyle} />
        <h1>Nursing</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://static.vecteezy.com/system/resources/previews/030/943/864/original/daycare-center-icon-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Day Care</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn3.iconfinder.com/data/icons/medical-round-metaphors/150/MedicalIconSetCollection11-512.png" alt="Fairs" style={imageStyle} />
        <h1>Diagnostics</h1>

      </div>

      </div>      
    </div>
  );
}

export default HealthType;
