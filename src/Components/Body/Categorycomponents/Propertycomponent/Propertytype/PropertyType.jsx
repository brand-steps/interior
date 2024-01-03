import React from 'react';
import { useState } from 'react';
import './propertytype.css'
import { useNavigate } from 'react-router-dom';
import sale from '../../../../../Assets/sale.png'
import rent from '../../../../../Assets/rent.jpg'
import homes from '../../../../../Assets/homes.png'
import plots from '../../../../../Assets/plots.png'
import comm from '../../../../../Assets/comm.png'
import project from '../../../../../Assets/project.png'
import room from '../../../../../Assets/room.png'
import agents from '../../../../../Assets/agents.jpg'

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
        <img src={sale} alt="Fairs" style={imageStyle} />
        <h1>Sale</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Rent`)}}>
        <img src={rent} alt="Fairs" style={imageStyle} />
        <h1>Rent</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Homes`)}}>
        <img src={homes} alt="Fairs" style={imageStyle} />
        <h1>Homes</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Plots`)}}>
        <img src={plots} alt="Fairs" style={imageStyle} />
        <h1>Plots</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Commercial`)}}>
        <img src={comm} alt="Fairs" style={imageStyle} />
        <h1>Commercial</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Projects`)}}>
        <img src={project} alt="Fairs" style={imageStyle} />
        <h1>Projects</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Rooms`)}}>
        <img src={room} alt="Fairs" style={imageStyle} />
        <h1>Rooms</h1>

      </div>
      
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Agents`)}}>
        <img src={agents} alt="Fairs" style={imageStyle} />
        <h1>Agents </h1>

      </div>
      </div>      
    </div>
  );
}

export default PropertyType;
