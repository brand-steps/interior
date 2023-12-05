import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram , faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Button, Navbar } from 'flowbite-react';
import './navbar2.css';
import face from '../../Assests/face.png'
import insta from '../../Assests/insta.webp'
import addr from '../../Assests/addr.png'
import phone from '../../Assests/phone.png'
import goog from '../../Assests/goog.png'

const NavContact2 = () => {



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
    <Navbar fluid rounded className=' border-b-2 border-rose-500 text-black bg-slate-200'>
    <Navbar.Brand href="">
    <img src={phone} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold">01273 569355</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <p className='text-black'>      
        <img src={insta} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
        <img src={face} className="mr-3 inline h-8 " alt="Flowbite React Logo" />
</p>
      
    </div>
    <Navbar.Collapse>

    <Navbar.Brand href="">
        
    <img src={goog} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
     <span className="self-center whitespace-nowrap text-xl font-semibold">Unit 19 Beach Cl, Newhaven BN9 0BY</span>
    </Navbar.Brand>

    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavContact2;
