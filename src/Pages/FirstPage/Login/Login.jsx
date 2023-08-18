import React from 'react'
import { NavLink } from "react-router-dom";

const Login = () => {
    let button = "LOGIN > "
  return (
    <div className='my-4 flex justify-center items-center' style={{
      backgroundImage: "url('https://www.osimo.com.tr/assets/images/services-bg.svg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "500px", /* Increased height */
    }}>
      <div className='flex flex-col'>
        <h3 style={{ color: "#EC0C36" }} className='text-2xl py-4'>Service</h3>
        <h1 className='text-white text-4xl font-bold mb-4'>Spare Part</h1>
        <p className='text-white'>
          You can choose the desired and desired product and send the offer form to our e-mail address You can choose the product you want and send it to our e-mail address.
        </p>
        <input type="text" className='w-1/5 my-4 p-2 rounded' placeholder='Username' />
        <input type="text" className='w-1/5 my-4 p-2 rounded' placeholder='Password' />


        <NavLink
  to="/Login"
>
<button
          style={{ background: "#EC0C36", padding: "8px 16px", fontSize: "16px" }}
          className="text-white font-semibold rounded-lg mt-4 hover:bg-blue-700 w-40"
        >
          {button}
        </button>
</NavLink>;
      </div>
    </div>
    
      
      
  )
}

export default Login