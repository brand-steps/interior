import React from 'react';
import estate from '../../../../Assets/estate.png'
import fashion from '../../../../Assets/fashion.png'
import jobs from '../../../../Assets/jobs.png'
import service from '../../../../Assets/service.png'
import furniture from '../../../../Assets/furniture.png'
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
        <img src={fashion} alt="Fairs" style={imageStyle} />
        <h1>Fashion & Appreal</h1>
      </div>
      </Link>
      <Link to="/property">
      <div style={containerStyle} >
        <img src={estate} alt="Fairs" style={imageStyle} />
        <h1>Property</h1>
      </div>
      </Link>
      <Link to="/jobs">
      <div style={containerStyle}>
        <img src={jobs} alt="Fairs" style={imageStyle} />
        <h1>Jobs</h1>

      </div>
      </Link>
      <Link to="/Services">

      <div style={containerStyle}>
        <img src={service} alt="Fairs" style={imageStyle} />
        <h1>Services</h1>

      </div>
      </Link>
      <Link to="/furnitures">
      <div style={containerStyle}>
        <img src={furniture} alt="Fairs" style={imageStyle} />
        <h1>Furniture</h1>

      </div>
      </Link>
      <Link to="/health">
      <div style={containerStyle}>
        <img src="https://icons.veryicon.com/png/o/business/circular-multi-color-function-icon/health-health.png" alt="Fairs" style={imageStyle} />
        <h1>Health</h1>

      </div>
      </Link>
      <Link to="/event">
      <div style={containerStyle}>
        <img src="https://cdn3.iconfinder.com/data/icons/basic-icons-5/64/EVENTS_CALENDAR-512.png" alt="Fairs" style={imageStyle} />
        <h1>Event Planner</h1>

      </div>
      </Link>
      <Link to="/beauty">

      <div style={containerStyle}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/1/5/1587.9-hairdresser-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Beauty </h1>

      </div>
      </Link>

    </div>
  );
}

export default HomeCategory;
