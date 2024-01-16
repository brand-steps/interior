import React from 'react';
import { useEffect } from 'react';
import './jobtype.css'
import { useNavigate } from 'react-router-dom';
import education from '../../../../../Assets/education.png'
import design from '../../../../../Assets/design.png'
import finance from '../../../../../Assets/finance.png'
import accountant from '../../../../../Assets/accountant.jpg'
import advert from '../../../../../Assets/advert.png'
import it from '../../../../../Assets/it.jpg'
import banking from '../../../../../Assets/banking.jpg'
import manage from '../../../../../Assets/manage.png'
import consult from '../../../../../Assets/consult.png'
import trainer from '../../../../../Assets/trainer.png'
import travel from '../../../../../Assets/travel.png'

const JobType = () => {
  const navigate = useNavigate();

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



  return (
    <div className=' flex justify-evenly mb-6'>
    <div className='maindiv flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {navigate(`/subcategories/Education`)}}>
        <img src={education} alt="Fairs" style={imageStyle} />
        <h1>Education</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Design`)}}>
        <img src={design} alt="Fairs" style={imageStyle} />
        <h1>Design</h1>
      </div>

      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Finance`)}}>
        <img src={finance} alt="Fairs" style={imageStyle} />
        <h1>Finance</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Accountant`)}}>
        <img src={accountant} alt="Fairs" style={imageStyle} />
        <h1>Accountant</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Advertising`)}}>
        <img src={advert} alt="Fairs" style={imageStyle} />
        <h1>Advertising</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/IT`)}}>
        <img src={it} alt="Fairs" style={imageStyle} />
        <h1>IT</h1>

      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Banking`)}}>
        <img src={banking} alt="Fairs" style={imageStyle} />
        <h1>Banking</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Management`)}}>
        <img src={manage} alt="Fairs" style={imageStyle} />
        <h1>Management</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Consulting`)}}>
        <img src={consult} alt="Fairs" style={imageStyle} />
        <h1>Consulting</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Trainers`)}}>
        <img src={trainer} alt="Fairs" style={imageStyle} />
        <h1>Trainers</h1>
      </div>
      <div style={containerStyle} onClick={() => {navigate(`/subcategories/Travel`)}}>
        <img src={travel} alt="Fairs" style={imageStyle} />
        <h1>Travel</h1>
      </div>


      </div>      
    </div>
  );
}

export default JobType;
