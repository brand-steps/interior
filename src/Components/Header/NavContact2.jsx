import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram , faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Button, Navbar } from 'flowbite-react';
import './navbar2.css';

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
    <Navbar fluid rounded className='bg-transparent border-b-2 border-rose-500 headcolors'>
    <Navbar.Brand href="https://flowbite-react.com">
    <FontAwesomeIcon icon={faWhatsapp} size="2x" className='headcolori mr-2' />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">01273 569355</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <p className='text-black'>        <FontAwesomeIcon icon={faInstagram} size="2x" className='headcolori' />
      <FontAwesomeIcon icon={faFacebook} size="2x" className='ml-2 headcolori'/>
</p>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>

    <Navbar.Brand href="https://flowbite-react.com">
        
    <FontAwesomeIcon icon={faWhatsapp} size="2x" className='headcolori mr-2' />
     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Unit 19 Beach Cl, Newhaven BN9 0BY</span>
    </Navbar.Brand>

    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavContact2;
