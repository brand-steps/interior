import React from 'react';
import { useEffect } from 'react';
import './furnituretype.css'
import { useNavigate } from 'react-router-dom';

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
        <img src="https://icon-library.com/images/office-chair-icon/office-chair-icon-7.jpg" alt="Fairs" style={imageStyle} />
        <h1>Office </h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Household`)}}>
        <img src="https://cdn4.iconfinder.com/data/icons/construction-flat-round-engineering/512/Interior_Decoration-512.png" alt="Fairs" style={imageStyle} />
        <h1>Household</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Outdoor`)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/9/1900.9-dining-table-i-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Outdoor</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Decorations`)}}>
        <img src="https://cdn2.iconfinder.com/data/icons/hobby-butterscotch-vol-2/512/Interior_Decorating-512.png" alt="Fairs" style={imageStyle} />
        <h1>Decorations</h1>

      </div>


      

      </div>      
    </div>
  );
}

export default FurnitureType;
