import React from 'react';

import './fashiontype.css'
const FashionType = () => {



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
        <img src="https://static.vecteezy.com/system/resources/previews/006/747/449/original/a-hanging-t-shirt-icon-in-flat-design-mens-wear-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Men Wear</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn1.iconfinder.com/data/icons/clothes-13/512/dress-512.png" alt="Fairs" style={imageStyle} />
        <h1>Women Wear</h1>
      </div>

      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/196/196466.png" alt="Fairs" style={imageStyle} />
        <h1>Kids Wear</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn4.iconfinder.com/data/icons/love-and-romance-2-9/128/53-512.png" alt="Fairs" style={imageStyle} />
        <h1>Wedding Wear</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/189/189580.png" alt="Fairs" style={imageStyle} />
        <h1>Party Wear</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/3/1301.9-pyjamas-suit-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Night Wear</h1>

      </div>
    
      </div>      
    </div>
  );
}

export default FashionType;
