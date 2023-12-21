import React from 'react';
import { useEffect } from 'react';
import './eventtype.css'
const EventType = () => {



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
        <img src="https://cdn-icons-png.flaticon.com/512/290/290018.png" alt="Fairs" style={imageStyle} />
        <h1>Wedding</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/168/168532.png" alt="Fairs" style={imageStyle} />
        <h1>Birthday</h1>
      </div>

      <div style={containerStyle}>
        <img src="https://static.vecteezy.com/system/resources/previews/016/045/126/original/concession-catering-glyph-circle-icon-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Catering</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://i.pinimg.com/564x/1f/7a/1c/1f7a1c41e2940c4e74779b6cf7fe6190.jpg" alt="Fairs" style={imageStyle} />
        <h1>Anniversary</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/2784/2784589.png" alt="Fairs" style={imageStyle} />
        <h1>Festival</h1>

      </div>

      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/2784/2784615.png" alt="Fairs" style={imageStyle} />
        <h1>Exibition</h1>
      </div>
      <div style={containerStyle}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/9/3926.9-presenting-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Seminar</h1>

      </div>
      <div style={containerStyle}>
        <img src="https://i.pinimg.com/564x/02/99/62/029962604b992c5ba477e94cc9f12a5a.jpg" alt="Fairs" style={imageStyle} />
        <h1>Entertainment</h1>

      </div>
      </div>      
    </div>
  );
}

export default EventType;
