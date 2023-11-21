import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';

const Cardss = ({ index ,  price , img , text , paragraph 
}) => {

  

  const navigate = useNavigate();
  const handleButtonClick = () => {

  };


  return (
    <div className="carousel-item " style={{ width: '300px', height: '450px' }}>
    <div className="carousel-content h-full flex flex-col justify-between" >
      <img src={img} alt="Potato Peeling Machine" className="w-4/5 mx-auto rounded-lg shadow-md" />
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{text}</h3>
       {/* <p className="text-gray-600 mt-2">{paragraph}</p> */}
        <p className="text-black font-bold text-2xl mt-2">£{price}</p>
      </div>
{/*}      <div className='ml-9 justify-between'>
        <span className='ml-5 border-2 p-1'>2015</span> <span className='ml-5  border-2 p-1'>Automatic</span><span className='ml-5  border-2 p-1'>1400 miles</span>
        <span className='ml-5  border-2 p-1'>Petrol</span>
      </div>
  */}
      <div className='items-center ml-9'>
      <button
        onClick={handleButtonClick}
        style={{ background: "rgb(18, 140, 126)", width: "30%", margin: "0 auto" }}
        className="text-white font-semibold px-4 py-2  mt-4 hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        View 
      </button>
      <button
        onClick={handleButtonClick}
        style={{ background: "#00072d", width: "30%", margin: "0 auto" }}
        className="text-white font-semibold px-4 py-2  mt-4 hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        View 
      </button>
      <button
        onClick={handleButtonClick}
        style={{ background: "#FC0204", width: "30%", margin: "0 auto" }}
        className="text-white font-semibold px-4 py-2  mt-4 hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        Finance 
      </button>
      </div>
    </div>
  </div>
  


    )
}

export default Cardss