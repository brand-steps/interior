import React from 'react';

const FairsComponent = () => {



  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
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
    <div className='flex  justify-evenly flex-wrap my-4' style={divStyle}>
      <div style={containerStyle}>
        <img src="https://www.osimo.com.tr/assets/images/icons/fairs.png" alt="Fairs" style={imageStyle} />
        <h1>FAIRS</h1>
        <p>You can reach the details of the fairs and events we attended and have more detailed information about the fairs we will attend.</p>
<button style={buttonStyle}>View</button>
      </div>
      <div style={containerStyle}>
        <img src="https://www.osimo.com.tr/assets/images/icons/articles.png" alt="Fairs" style={imageStyle} />
        <h1>ARTICLES</h1>
        <p>You can have more up-to-date information about us with news from us in the press.</p>
<button style={buttonStyle}>View</button>
      </div>
      <div style={containerStyle}>
        <img src="https://www.osimo.com.tr/assets/images/icons/videos.png" alt="Fairs" style={imageStyle} />
        <h1>VIDEOS</h1>
        <p>You can get more detailed information about our products by watching the videos we have prepared for you.</p>
<button style={buttonStyle}>View</button>
      </div>
      <div style={containerStyle}>
        <img src="https://www.osimo.com.tr/assets/images/icons/catalog.png" alt="Fairs" style={imageStyle} />
        <h1>ONLINE CATALOG</h1>
        <p>You can review our online catalog, which we offer to you for better service and better quality products.</p>
<button style={buttonStyle}>View</button>
      </div>


      
    </div>
  );
}

export default FairsComponent;
