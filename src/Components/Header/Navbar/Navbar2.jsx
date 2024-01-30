import React, { useEffect, useState } from 'react';
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import NavContact from '../Navcontact/NavContact';
import { Button, Navbar } from 'flowbite-react';

const Navbars2 = () => {
  const navigate = useNavigate();






  return (
    <div>
      <Navbar fluid rounded className='bg-yellow-400'>
      <Navbar.Brand href="">
        <img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-base font-semibold hidden md:inline ml-6">Deliver to
        <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="ww" className="h-2 ml-2 w-2 inline" />
        </span>
        
        <input type="text" placeholder='  What are You Looking For?' className='h-10 w-96 ml-12 hidden md:inline rounded-xl ' style={{width:'600px'}}/>

      </Navbar.Brand>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
English<img src="https://www.transparentpng.com/download/line/stRuJH-vertical-black-line-illustration-png.png" alt="ww" className="h-6 w-6 inline hidden md:inline" />      
  </Navbar.Link>
        <Navbar.Link href="#" active>Login<img src="https://www.transparentpng.com/download/line/stRuJH-vertical-black-line-illustration-png.png" alt="ww" className="h-6 w-6 inline hidden md:inline" />      
</Navbar.Link>
<Navbar.Link href="#" active>Wishlist<img src="https://www.transparentpng.com/download/line/stRuJH-vertical-black-line-illustration-png.png" alt="ww" className="h-6 w-6 inline hidden md:inline" />      
</Navbar.Link>        <Navbar.Link href="#" active>Cart<img src="https://www.transparentpng.com/download/line/stRuJH-vertical-black-line-illustration-png.png" alt="ww" className="h-6 w-6 inline hidden md:inline" />      
</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

</div>
  )
}

export default Navbars2