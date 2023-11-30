import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import './cards.css';

const SoldCards = ({ index ,  price , img , text , paragraph 
}) => {

  
  const textcolor = {
    color: '#E5A317',

  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
navigate("/stockdetails")
  };


  return (
    <div className="carousel-item " style={{ width: '400px', height: '400px' }}>
    <div className="carousel-content h-full flex flex-col justify-between  " >
      <img src={img} alt="Potato Peeling Machine" className="w-4/5 mx-auto rounded-lg shadow-md mt-9" />
      <div className="text-center mt-4 ">
        <h3 className="text-xl font-semibold">{text}</h3>
       {/* <p className="text-gray-600 mt-2">{paragraph}</p> */}
        <p className=" font-bold text-2xl mt-2" style={textcolor}>£{price}</p>
      </div>

    </div>
  </div>
  


    )
}

export default SoldCards