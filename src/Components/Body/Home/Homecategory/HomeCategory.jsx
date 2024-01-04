import React from 'react';
import estate from '../../../../Assets/estate.png'
import property2 from '../../../../Assets/property2.png'
import fashion from '../../../../Assets/fashion.png'
import fashion2 from '../../../../Assets/fashion2.png'
import jobs from '../../../../Assets/jobs.png'
import jobs2 from '../../../../Assets/jobs2.png'
import service from '../../../../Assets/service.png'
import service2 from '../../../../Assets/service2.png'
import furniture from '../../../../Assets/furniture.png'
import furniture2 from '../../../../Assets/furniture2.png'
import health from '../../../../Assets/health.png'
import event from '../../../../Assets/event.png'
import beauty from '../../../../Assets/beauty.jpg'

import { Link } from 'react-router-dom';
const HomeCategory = () => {



  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
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
    <div className='flex  justify-evenly flex-wrap my-4' >
      <Link to="/fashion">
              <div style={containerStyle}>
        <img src={fashion2} alt="Fairs" style={imageStyle} />
        <h1>Fashion & Apparel</h1>
      </div>
      </Link>
      <Link to="/property">
      <div style={containerStyle} >
        <img src={property2} alt="Fairs" style={imageStyle} />
        <h1>Property</h1>
      </div>
      </Link>
      <Link to="/jobs">
      <div style={containerStyle}>
        <img src={jobs2} alt="Fairs" style={imageStyle} />
        <h1>Jobs</h1>

      </div>
      </Link>
      <Link to="/Services">

      <div style={containerStyle}>
        <img src={service2} alt="Fairs" style={imageStyle} />
        <h1>Services</h1>

      </div>
      </Link>
      <Link to="/furnitures">
      <div style={containerStyle}>
        <img src={furniture2} alt="Fairs" style={imageStyle} />
        <h1>Furniture</h1>

      </div>
      </Link>
      <Link to="/health">
      <div style={containerStyle}>
        <img src={health} alt="Fairs" style={imageStyle} />
        <h1>Health</h1>

      </div>
      </Link>
      <Link to="/event">
      <div style={containerStyle}>
        <img src={event} alt="Fairs" style={imageStyle} />
        <h1>Events & Planners</h1>

      </div>
      </Link>
      <Link to="/beauty">

      <div style={containerStyle}>
        <img src={beauty} alt="Fairs" style={imageStyle} />
        <h1>Beauty </h1>

      </div>
      </Link>

    </div>
  );
}

export default HomeCategory;
