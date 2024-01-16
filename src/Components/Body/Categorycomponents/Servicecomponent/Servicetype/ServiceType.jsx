import React from 'react';
import { useEffect } from 'react';
import './servicetype.css'
import { useNavigate } from 'react-router-dom';
import elec from '../../../../../Assets/elec.png'
import plum from '../../../../../Assets/plum.png'
import painter from '../../../../../Assets/painter.png'
import carpenter from '../../../../../Assets/carpenter.png'
import mechanic from '../../../../../Assets/mechanic.png'
import technition from '../../../../../Assets/technition.png'
import cleaner from '../../../../../Assets/cleaner.png'
import driver from '../../../../../Assets/driver.jpg'
import others from '../../../../../Assets/others.png'

const ServiceType = () => {
  const navigate = useNavigate();



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



  return (
    <div className=' flex justify-evenly mb-6'>
    <div className='maindiv flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {navigate(`/subcategories/Electrician`)}}>
        <img src={elec} alt="Fairs" style={imageStyle} />
        <h1>Electrician</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Plumber`)}}>
        <img src={plum} alt="Fairs" style={imageStyle} />
        <h1>Plumber</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Painter`)}}>
        <img src={painter} alt="Fairs" style={imageStyle} />
        <h1>Painter</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Carpenter`)}}>
        <img src={carpenter} alt="Fairs" style={imageStyle} />
        <h1>Carpenter</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Mechanic`)}}>
        <img src={mechanic} alt="Fairs" style={imageStyle} />
        <h1>Mechanic</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Technician`)}}>
        <img src={technition} alt="Fairs" style={imageStyle} />
        <h1>Technician</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Cleaner`)}}>
        <img src={cleaner} alt="Fairs" style={imageStyle} />
        <h1>Cleaner</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Driver`)}}>
        <img src={driver} alt="Fairs" style={imageStyle} />
        <h1>Driver</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Service Others`)}}>
        <img src={others} alt="Fairs" style={imageStyle} />
        <h1>Others</h1>
      </div>
      </div>      
    </div>
  );
}

export default ServiceType;
