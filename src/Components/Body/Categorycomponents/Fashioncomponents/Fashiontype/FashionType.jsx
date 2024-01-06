import React from 'react';
import { useNavigate } from 'react-router-dom';
import './fashiontype.css'
import men from '../../../../../Assets/men.jpg'
import women from '../../../../../Assets/women.png'
import kids from '../../../../../Assets/kids.png'
import wedding from '../../../../../Assets/wedding.png'
import party from '../../../../../Assets/party.png'
import night from '../../../../../Assets/night.png'
import others from '../../../../../Assets/others.png'

const FashionType = () => {
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
              <div style={containerStyle} onClick={() => {navigate(`/subcategories/Men Wear`)}}>
        <img src={men} alt="Fairs" style={imageStyle} />
        <h1>Men Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Women Wear`)}}>
        <img src={women} alt="Fairs" style={imageStyle} />
        <h1>Women Wear</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Kids Wear`)}}>
        <img src={kids} alt="Fairs" style={imageStyle} />
        <h1>Kids Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Wedding Wear`)}}>
        <img src={wedding} alt="Fairs" style={imageStyle} />
        <h1>Wedding Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Party Wear`)}}>
        <img src={party} alt="Fairs" style={imageStyle} />
        <h1>Party Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Night Wear`)}}>
        <img src={night} alt="Fairs" style={imageStyle} />
        <h1>Night Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Fashion Others`)}}>
        <img src={others} alt="Fairs" style={imageStyle} />
        <h1>Others</h1>
      </div>
      </div>      
    </div>
  );
}

export default FashionType;
