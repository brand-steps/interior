import React from 'react';
import { useEffect } from 'react';
import './healthtype.css'
import { useNavigate } from 'react-router-dom';
import clinics from '../../../../../Assets/clinics.png'
import dentist from '../../../../../Assets/dentist.jpg'
import doctor from '../../../../../Assets/doctor.png'
import nurse from '../../../../../Assets/nurse.png'
import day from '../../../../../Assets/day.jpg'
import diag from '../../../../../Assets/diag.png'
import others from '../../../../../Assets/others.png'

const HealthType = () => {
  const navigate = useNavigate();
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
              <div style={containerStyle} onClick={() => {navigate(`/subcategories/Clinics`)}}>
        <img src={clinics} alt="Fairs" style={imageStyle} />
        <h1>Clinics</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Dentistry`)}}>
        <img src={dentist} alt="Fairs" style={imageStyle} />
        <h1>Dentistry</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Doctor`)}}>
        <img src={doctor} alt="Fairs" style={imageStyle} />
        <h1>Doctor</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Nursing`)}}>
        <img src={nurse} alt="Fairs" style={imageStyle} />
        <h1>Nursing</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Day Care`)}}>
        <img src={day} alt="Fairs" style={imageStyle} />
        <h1>Day Care</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Diagnostics`)}}>
        <img src={diag} alt="Fairs" style={imageStyle} />
        <h1>Diagnostics</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Health Others`)}}>
        <img src={others} alt="Fairs" style={imageStyle} />
        <h1>Others</h1>
      </div>
      </div>      
    </div>
  );
}

export default HealthType;
