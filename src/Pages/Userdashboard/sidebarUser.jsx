import React from 'react';
import { Link } from 'react-router-dom';
import avtar from '../../Images/avtar.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Sidebaruser = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleLogout = async () => {
    try {
      await axios.post('https://busy-lime-cygnet-hem.cyclic.cloud/logout',  {
        withCredentials: true, // This ensures that cookies are sent with the request
      });
      console.log('Logout successful');

    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <div className="bg-blue-500 h-screen sm:w-1/4 p-4">
  <div className='flex'>
    <p className="font-extrabold flex text-white text-3xl m-6 "><img src={avtar} className='mr-4' alt="" /> Dashboard</p>
  </div>
  <ul style={{"marginTop": "3rem", "marginLeft": "27px"}} className="space-y-2 ">
    <Link to={'/Profile'}>
      <li className="cursor-pointer transition-colors duration-300 py-2 sm:py-4 font-bold">
        Profile
      </li>
    </Link>
    <Link to={'/AddProduct/user'}>
      <li className="cursor-pointer transition-colors duration-300 py-2 sm:py-4 font-bold">
        Add Products
      </li>
    </Link>
    <Link to={'/Allproduct'}>
      <li className="cursor-pointer transition-colors duration-300 py-2 sm:py-4 font-bold">
        Products
      </li>
    </Link>
    {/* <Link to={'/'}> */}
      <li  onClick={handleLogout}     className="cursor-pointer transition-colors duration-300 py-2 sm:py-4 font-bold">
        Logout
      </li>
    {/* </Link> */}
  </ul>
</div>

  );
};

export default Sidebaruser;
