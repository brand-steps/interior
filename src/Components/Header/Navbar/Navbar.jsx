import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import NavContact from '../Navcontact/NavContact';

const Navbars = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  let [customeruser, setcustomeruser] = useState(false);
  let [customerresponse, setcustomerresponse] = useState("");
  let [customerbring, setcustomerbring] = useState(false);
  let [packagename, setpackagename] = useState();

  const [login, setlogin] = useState(false)





  return (
    <div>
      <NavContact/>
      <Navbar fluid rounded className='bg-white dark:bg-white'>
      <Navbar.Brand href="https://listit.pk">
        <img src="https://alvinter.com/wp-content/uploads/2020/10/Alvinter-Port-Equipment-Spare-Parts-logo-400x150-1.jpg" className="mr-3 h-16 sm:h-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">



        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
        <Navbar.Link className='text-lg divhead text-black '> 
          Home
        </Navbar.Link>
        </Link>
        <Link to={"/listings"}>
        <Navbar.Link  className='text-lg divhead text-black '> About Us</Navbar.Link> </Link>

       
       <Dropdown
          arrowIcon={false}
          inline
          label={
            <Navbar.Link className='text-lg divhead text-black '> Services</Navbar.Link>
          }
        >
          <Dropdown.Item >Interior Design</Dropdown.Item>

          <Dropdown.Item >Exterior Design</Dropdown.Item>
          <Dropdown.Item>Architecture & Construction</Dropdown.Item>
          <Dropdown.Item >Custom Made Furniture</Dropdown.Item>
          <Dropdown.Item >Landscaping</Dropdown.Item>
          <Dropdown.Item >3D Studio</Dropdown.Item>

        </Dropdown>
        
        <Link to={"/aboutus"}>
        <Navbar.Link className='text-lg divhead text-black '> Gallery</Navbar.Link>
        </Link>
        <Link to={"/contact"}>
        <Navbar.Link className='text-lg divhead text-black '> Projects</Navbar.Link> </Link>
        
        <Navbar.Link className='text-lg divhead text-black '> Blogs</Navbar.Link>
        <Navbar.Link className='text-lg divhead text-black '> Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

</div>
  )
}

export default Navbars