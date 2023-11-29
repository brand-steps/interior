import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram , faLinkedin, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const NavContact = () => {



  const divStyle = {
backgroundColor: '#00b0db'    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',

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
    <div className='flex  justify-end flex-wrap ' style={divStyle} >
      <div style={containerStyle}>
        <span className='text-black font-semibold'><span className='ml-4'> 91 Park View Road, Uxbridge, UB8 3GA</span> <span className='ml-2 mr-3'>sales@japmpv.co.uk</span></span>
      </div>
      <FontAwesomeIcon icon="fa-solid fa-message" />


      
    </div>
  );
}

export default NavContact;
