import React from 'react';
import { useEffect } from 'react';
import './jobtype.css'
import { useNavigate } from 'react-router-dom';

const JobType = () => {
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
              <div style={containerStyle} onClick={() => {navigate(`/subcategories/Education`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/234/234588.png" alt="Fairs" style={imageStyle} />
        <h1>Education</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Design`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/953/953060.png" alt="Fairs" style={imageStyle} />
        <h1>Design</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Finance`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/5293/5293064.png" alt="Fairs" style={imageStyle} />
        <h1>Finance</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Accountant`)}}>
        <img src="https://static.vecteezy.com/system/resources/previews/004/697/021/original/payment-accounting-circle-flat-icon-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Accountant</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Advertising`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/2215/2215022.png" alt="Fairs" style={imageStyle} />
        <h1>Advertising</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/IT`)}}>
        <img src="https://icon-library.com/images/website-icon-circle/website-icon-circle-4.jpg" alt="Fairs" style={imageStyle} />
        <h1>IT</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Banking`)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/1/5/1538.9-bank-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Banking</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Management`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/1870/1870096.png" alt="Fairs" style={imageStyle} />
        <h1>Management</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Consulting`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/5809/5809644.png" alt="Fairs" style={imageStyle} />
        <h1>Consulting</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Trainers`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/249/249216.png" alt="Fairs" style={imageStyle} />
        <h1>Trainers</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Travel`)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="Fairs" style={imageStyle} />
        <h1>Travel</h1>
      </div>


      </div>      
    </div>
  );
}

export default JobType;
