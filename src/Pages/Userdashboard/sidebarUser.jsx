import React from 'react';
import { Link } from 'react-router-dom';
import avtar from '../../Images/avtar.png'
const Sidebaruser = () => {
  return (
    <div className="bg-blue-500  h-screen w-1/4 p-4">
        

<div className='flex'  >
<p className="font-extrabold flex text-white text-3xl m-6 "><img src={avtar}   className='mr-4' alt="" /> Dashboard</p>

</div>
      <ul   style={{"margin-top": "3rem", "margin-left": "27px"}}  className="space-y-2 ">
      <Link to={'/Profile'}  >
      <li className=" cursor-pointer transition-colors duration-300 py-6 font-bold">
          Profile
        </li>
      
      </Link>   
      

      <Link   to={'/AddProduct/user'}  >
      <li className=" cursor-pointer transition-colors duration-300 py-6 font-bold">
          Add Products  
        </li>
      
      </Link> 

      <Link   to={'/Allproduct'}  >
      <li className=" cursor-pointer transition-colors duration-300 py-6 font-bold">
          Products 
        </li>
      
      </Link> 
     
      
      </ul>
    </div>
  );
};

export default Sidebaruser;
