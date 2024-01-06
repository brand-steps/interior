import React from 'react';
import { useEffect } from 'react';
import './furnituretype.css'
import { useNavigate } from 'react-router-dom';
import office from '../../../../../Assets/office.jpg'
import household from '../../../../../Assets/household.png'
import outdoor from '../../../../../Assets/outdoor.png'
import decoration from '../../../../../Assets/decoration.png'
import others from '../../../../../Assets/others.png'

const FurnitureType = () => {
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
              <div style={containerStyle} onClick={() => {navigate(`/subcategories/Office`)}}>
        <img src={office} alt="Fairs" style={imageStyle} />
        <h1>Office </h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Household`)}}>
        <img src={household} alt="Fairs" style={imageStyle} />
        <h1>Household</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Outdoor`)}}>
        <img src={outdoor} alt="Fairs" style={imageStyle} />
        <h1>Outdoor</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Decorations`)}}>
        <img src={decoration} alt="Fairs" style={imageStyle} />
        <h1>Decorations</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Furniture Others`)}}>
        <img src={others} alt="Fairs" style={imageStyle} />
        <h1>Others</h1>
      </div>

      

      </div>      
    </div>
  );
}

export default FurnitureType;
