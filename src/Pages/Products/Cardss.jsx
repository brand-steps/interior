import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../Context/Context';
const Cardss = ({ index ,  price , img , text , paragraph ,   }) => {
// console.log("Price" + price);
// console.log("Imdex" + price);
  const {name, setName} = useContext(MyContext);
  const {pricep , setPricep} = useContext(MyContext);
  const {description, setDescription} = useContext(MyContext);
  const {image , setImage } = useContext(MyContext);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    setName({ ...name, key: text });
    setPricep({ ...pricep, key: price });
    setDescription({ ...description, key: paragraph });
    setImage({ ...image, key: img });
    navigate(`/Productdetail`);
    // console.log(name.key)
    // console.log(pricep.key)
    // console.log(description.key)
    // console.log(image.key)
  };


  return (
    <div className="carousel-item m-4" style={{ width: '300px', height: '400px' }}>
    <div className="carousel-content h-full flex flex-col justify-between">
      <img src={img} alt="Potato Peeling Machine" className="w-4/5 mx-auto rounded-lg shadow-md" />
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{text}</h3>
        <p className="text-gray-600 mt-2">{paragraph}</p>
        <p className="text-black font-bold text-2xl mt-2">£{price}</p>
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