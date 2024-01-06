import React from 'react';
import { useEffect } from 'react';
import './beautytype.css'
import { useNavigate } from 'react-router-dom';
import facial from '../../../../../Assets/facial.png'
import bridal from '../../../../../Assets/bridal.png'
import hair from '../../../../../Assets/hair.png'
import makeup from '../../../../../Assets/makeup.png'
import massage from '../../../../../Assets/massage.jpg'
import spa from '../../../../../Assets/spa.png'
import mani from '../../../../../Assets/mani.png'
import others from '../../../../../Assets/others.png'

const BeautyType = () => {
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
              <div style={containerStyle} onClick={() => {navigate(`/subcategories/Facial`)}}>
        <img src={facial} alt="Fairs" style={imageStyle} />
        <h1>Facial</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Bridal`)}}>
        <img src={bridal} alt="Fairs" style={imageStyle} />
        <h1>Bridal</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Hair Salon`)}}>
        <img src={hair} alt="Fairs" style={imageStyle} />
        <h1>Hair Salon</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Makeup`)}}>
        <img src={makeup} alt="Fairs" style={imageStyle} />
        <h1>Makeup</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Massages`)}}>
        <img src={massage} alt="Fairs" style={imageStyle} />
        <h1>Massages</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Spa Salon`)}}>
        <img src={spa} alt="Fairs" style={imageStyle} />
        <h1>Spa Salon</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Manicures`)}}>
        <img src={mani} alt="Fairs" style={imageStyle} />
        <h1>Manicures</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Beauty Others`)}}>
        <img src={others} alt="Fairs" style={imageStyle} />
        <h1>Others</h1>
      </div>

      </div>      
    </div>
  );
}

export default BeautyType;
