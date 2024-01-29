import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram , faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


function Footers() {
  return (
    <Footer container className='bg-black dark:bg-black '>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img src="https://alvinter.com/wp-content/uploads/2020/10/Alvinter-Port-Equipment-Spare-Parts-logo-400x150-1.jpg" alt="logo" className=' sm:h-32 h-24' />
         {/*}   <Footer.Brand
              href="#"
              src={logo}
              alt="Flowbite Logo"
              name="" 
  /> */}
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
 

            <div>
              <Footer.Title title="about" className='text-white'/>
              <Footer.LinkGroup col>
                <Link to={'/aboutus'}>
                <Footer.Link className='text-white'>About Us</Footer.Link>
                </Link>
                <Link to={'/'}>
                <Footer.Link className='text-white'>Home</Footer.Link>
                </Link>
                <Link to={'/pricing'}>
                <Footer.Link className='text-white'>Pricing</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow us" className='text-white'/>
              <Footer.LinkGroup col>
               {/* <Footer.Link href="#"className='text-white'>Instagram</Footer.Link> */}
               <Link to='https://londonlogodesigners.co.uk/'>
                <Footer.Link  className='text-white'>Facebook</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='text-white' />
              <Footer.LinkGroup col>
                <Link to='/privacypolicy'>
                <Footer.Link className='text-white'>Privacy Policy</Footer.Link> </Link>
                <Link to='/terms&conditon'>
                <Footer.Link className='text-white'>Terms &amp; Conditions</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Link to='https://londonlogodesigners.co.uk/'>
          <Footer.Copyright by="LondonLogoDesigners" year={2024} className='text-white' />
          </Link>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
           {/*} <Footer.Icon href="#" icon={BsFacebook} className='headcolors'/>
            <Footer.Icon href="#" icon={BsInstagram} className='headcolors' />
            <Footer.Icon href="#" icon={BsTwitter} className='headcolors' />
            <Footer.Icon href="#" icon={BsGithub} className='headcolors'/>
<Footer.Icon href="#" icon={BsDribbble} className='headcolors'/> 
        <img src={insta} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
        <img src={phone} className="mr-3 inline h-7 " alt="Flowbite React Logo" /> */}
       <a href="https://www.facebook.com/profile.php?id=61554996643658" target='_blank'> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" className="mr-3 inline h-7 " alt="Facebook logo" /></a>


          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footers;
