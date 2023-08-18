import React, { useState } from 'react';
import classNames from 'classnames';
import './home.css'
import logo from '../../Images/equipment suppliers logo mini.png';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const MenuItem = ({ text }) => {
  return (
    <li className='text-sm pr-6' style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
      {text}
    </li>
  );
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
    <div   style={{width : "200px"}}  class="logo ">
       <img src={logo} alt="" />
    </div>
    <input type="checkbox" id="click"/>
    <label for="click" class="menu-btn">
    <i class="fas fa-bars"></i>
    </label>
    <ul     >
       <li className='mt-2'  ><Link to="/" >Home</Link></li>
       <li className='mt-2'  ><Link to="/Corporate" >Corporate</Link></li>
       <li className='mt-2'  ><Link to="/Prducts" >Products</Link></li>
       {/* <li></li> */}
       <li className='mt-2'  ><Link to="/OurDocument" >Our Documents</Link></li>
       <li className='mt-2'  ><Link to="/TechnicalService" >Teachnical Services </Link></li>
       <li className='mt-2'  ><Link to="/Contact" >Contact</Link></li>
       {/* <li> */}

       <NavLink to="/Login">
  <button type="button"  style={{"background" : "rgb(236, 12, 54)"}}  class="self-end text-white  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white">Login in</button>
</NavLink>

       {/* </li> */}

       {/* <li><Link to="/Login" ></Link></li> */}


    </ul>
 </nav>

  );
};

export default Home;
