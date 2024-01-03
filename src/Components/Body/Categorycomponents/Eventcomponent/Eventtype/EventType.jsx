import React from 'react';
import { useEffect } from 'react';
import './eventtype.css'
import { useNavigate } from 'react-router-dom';
import wed from '../../../../../Assets/wed.png'
import birth from '../../../../../Assets/birth.png'
import catering from '../../../../../Assets/catering.jpg'
import anniversary from '../../../../../Assets/anniversary.jpg'
import festival from '../../../../../Assets/festival.png'
import exibition from '../../../../../Assets/exibition.png'
import seminar from '../../../../../Assets/seminar.png'
import music from '../../../../../Assets/music.png'

const EventType = () => {
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
              <div style={containerStyle} onClick={() => {navigate(`/subcategories/Wedding`)}}>
        <img src={wed} alt="Fairs" style={imageStyle} />
        <h1>Wedding</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Birthday`)}}>
        <img src={birth} alt="Fairs" style={imageStyle} />
        <h1>Birthday</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Catering`)}}>
        <img src={catering} alt="Fairs" style={imageStyle} />
        <h1>Catering</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Anniversary`)}}>
        <img src={anniversary} alt="Fairs" style={imageStyle} />
        <h1>Anniversary</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Festival`)}}>
        <img src={festival} alt="Fairs" style={imageStyle} />
        <h1>Festival</h1>

      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Exibition`)}}>
        <img src={exibition} alt="Fairs" style={imageStyle} />
        <h1>Exibition</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Seminar`)}}>
        <img src={seminar} alt="Fairs" style={imageStyle} />
        <h1>Seminar</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Entertainment`)}}>
        <img src={music} alt="Fairs" style={imageStyle} />
        <h1>Entertainment</h1>

      </div>
      </div>      
    </div>
  );
}

export default EventType;
