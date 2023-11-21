import React from 'react';
import carback1 from '../../../../Assests/aboutimg.jpg'
import carback3 from '../../../../Assests/carback3.jpg'
import carback2 from '../../../../Assests/carback6.jpg'

import carback4 from '../../../../Assests/carback5.avif'

const About = () => {



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

    width: '600px', // Adjust the width as needed

  };
 

  const imageStyle = {
    width: '590px',
    height: '350px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#00072d',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
    <div className='flex d-flex justify-evenly flex-wrap my-12'>
      <div style={containerStyle} className='imgback'>
      <img src={carback1} alt="Fairs" style={imageStyle} />
      </div>
      <div style={containerStyle} className='imgback'>

<p>We Source The Best Specialist Vehicles, We Source Latest Models, Minimum Of 60 Cars Available For Viewings At One Whole Time, Hand Picked Purchased Vehicles, Provide An Excellent After Sale, We Accept Part Exchanges, Nationwide Delivery Available At An Extra Cost, Family Run Business, We Are Very Highly Rated And Have A Very Loyal Customer Base.

We also offer a value your vehicle and part exchange service. Where we can offer a quick and easy valuation for your current vehicle or trade directly with us for a part exchange.</p>
      </div>


      
    </div>
  );
}

export default About;
