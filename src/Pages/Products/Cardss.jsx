import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

const Cardss = ({img , text , paragraph , price}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/Productdetail/${encodeURIComponent(img)}/${encodeURIComponent(text)}/${encodeURIComponent(paragraph)}/${encodeURIComponent(price)}`);
  };


  return (
    <div className="carousel-item m-4" style={{ width: '300px', height: '400px' }}>
    <div className="carousel-content h-full flex flex-col justify-between">
      <img src={img} alt="Potato Peeling Machine" className="w-4/5 mx-auto rounded-lg shadow-md" />
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{text}</h3>
        <p className="text-gray-600 mt-2">{paragraph}</p>
        <p className="text-black font-bold text-2xl mt-2">{price}</p>
      </div>
      <button
        onClick={handleButtonClick}
        style={{ background: "#EC0C36", width: "80%", margin: "0 auto" }}
        className="text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        View Product
      </button>
    </div>
  </div>
  


    )
}

export default Cardss