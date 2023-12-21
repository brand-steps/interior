import React from 'react';
import { useEffect } from 'react';
import './beautytype.css'
const BeautyType = () => {



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
        <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-spa-facial-clay-mask-icon-circle-png-image_5282209.jpg" alt="Fairs" style={imageStyle} />
        <h1>Facial</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/209/209089.png" alt="Fairs" style={imageStyle} />
        <h1>Bridal</h1>
      </div>

      <div style={containerStyle}>
        <img src="https://img.freepik.com/premium-vector/round-icon-hair-salon-with-scissors-comb_690577-679.jpg?w=2000" alt="Fairs" style={imageStyle} />
        <h1>Hair Salon</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/220/220012.png" alt="Fairs" style={imageStyle} />
        <h1>Makeup</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://static.vecteezy.com/system/resources/previews/009/043/942/non_2x/hand-massage-glyph-circle-background-icon-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Massages</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/8630/8630206.png" alt="Fairs" style={imageStyle} />
        <h1>Spa Salon</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/1802/1802475.png" alt="Fairs" style={imageStyle} />
        <h1>Manicures</h1>
      </div>
      

      </div>      
    </div>
  );
}

export default BeautyType;
