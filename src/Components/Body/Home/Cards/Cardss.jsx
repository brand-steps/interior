import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import './cards.css';

const Cardss = ({ index ,  price , img , text , paragraph , ids , year, milagee, gear
}) => {

  
  const textcolor = {
    color: '#E5A317',

  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
navigate("/stockdetails")
  };


  return (
    <div className="carousel-item " style={{ width: '400px', height: '550px' }}>
    <div className="carousel-content h-full flex flex-col justify-between  " >
      <img src={img} alt="car image" className="w-4/5 mx-auto rounded-lg shadow-md mt-9" />
      <div className="text-center mt-4 ">
        <h3 className="text-xl font-semibold">{text}</h3>
       {/* <p className="text-gray-600 mt-2">{paragraph}</p> */}
        <p className=" font-bold text-2xl mt-2" style={textcolor}>£{price}</p>
      </div>
     <div className='ml-9 justify-between'>
        <span className='ml-8 txtbg font-semibold border-2 rounded-lg p-1'>{year}</span> <span className='ml-5 txtbg font-semibold border-2 rounded-lg p-1'>{gear}</span><span className='ml-5 txtbg font-semibold border-2 rounded-lg p-1'>{milagee} miles</span>
        
      </div>

      <div className='items-center ml-9'>
      <a href="https://wa.me/+447445953220" target='_blank'>
      <button
        className="btn1 text-white font-semibold px-4 py-2  mt-4 transition-colors duration-300 ease-in-out"
      >
        Contact 
      </button>
      </a>
      <button
        onClick={()=>{navigate(`/detailstock/${ids}`, { replace: true }) }}
        className="btn2 text-white font-semibold px-4 py-2  mt-4 transition-colors duration-300 ease-in-out"
      >
        View 
      </button>
      <button
        onClick={handleButtonClick}
        className="btn3 text-white font-semibold px-4 py-2  mt-4 transition-colors duration-300 ease-in-out"
      >
        Finance 
      </button>
      </div>
    </div>
  </div>
  


    )
}

export default Cardss