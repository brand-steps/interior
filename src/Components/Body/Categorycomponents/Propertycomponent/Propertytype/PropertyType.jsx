import React from 'react';
import { useState } from 'react';
import './propertytype.css'
import { useNavigate } from 'react-router-dom';
const PropertyType = () => {
  const navigate = useNavigate();
  const [propertytypess, setpropertytypess] = useState();



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
              <div style={containerStyle}  onClick={() => {navigate(`/subcategories/Sale`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/196/196266.png" alt="Fairs" style={imageStyle} />
        <h1>Sale</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Rent`)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/1/1/1153.9-house-on-rent-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Rent</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Homes`)}}>
        <img src="https://images.vexels.com/media/users/3/140527/isolated/preview/449b95d58f554656b159dd3ca21ab123-home-round-icon.png" alt="Fairs" style={imageStyle} />
        <h1>Homes</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Plots`)}}>
        <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Marker-512.png" alt="Fairs" style={imageStyle} />
        <h1>Plots</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Commercial`)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/2/3/2355.9-offices-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Commercial</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Projects`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/7412/7412637.png" alt="Fairs" style={imageStyle} />
        <h1>Projects</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Rooms`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/195/195461.png" alt="Fairs" style={imageStyle} />
        <h1>Rooms</h1>

      </div>
      
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Agents`)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/2/9/2915.9-support-agent-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Agents </h1>

      </div>
      </div>      
    </div>
  );
}

export default PropertyType;
