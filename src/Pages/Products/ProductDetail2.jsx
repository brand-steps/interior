import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Foooter/Footer';
import Home from '../HOme/Home';
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { MyContext } from '../Context/Context';
const Productdetail2 = () => {
  const navigate = useNavigate();
  const {name, setName} = useContext(MyContext);
  const {pricep , setPricep} = useContext(MyContext);
  const {description, setDescription} = useContext(MyContext);
  const {image , setImage } = useContext(MyContext);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parseFloat(pricep));
  const [showCart, setShowCart] = useState(false); // State to control cart slider visibility

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + parseFloat(pricep));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - parseFloat(pricep));
    }
  };

  const handleAddToCart = () => {

    navigate(`/PaymentPage/${encodeURIComponent(totalPrice)}/${quantity}`);

  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Home />
      <div className="bg-gray-100 py-6 flex justify-center items-center">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full md:w-2/3">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <img
                  src={image}
                  alt="Product"
                  className="object-cover rounded-lg shadow-md w-full"
                />
            </div>
            <div className="md:w-1/2 pl-4 md:pl-6">
              {/* <img src={image.key} alt="" /> */}
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 md:mb-4">
                {name}
              </h1>
              <p className="text-gray-600 mb-4">
                {description}
              </p>
              <p className="text-lg md:text-2xl text-red-600 font-semibold mb-2">
                ${totalPrice.toFixed(2)} 
              </p>
              <div className="flex items-center mb-4">
                <button
                  className="text-gray-700 text-xl px-2 md:px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="mx-2 md:mx-4 text-xl">{quantity}</span>
                <button
                  className="text-gray-700 text-xl px-2 md:px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
              {/* <Link to={`/PaymentPage/${totalPrice}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"> */}
              <button
                className="bg-red-500 mr-4 hover:bg-red-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                style={{ backgroundColor: 'rgb(236, 12, 54)' }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                style={{ backgroundColor: 'rgb(236, 12, 54)' }}
                onClick={handleAddToCart}
              >
                Buy Now
              </button>
              {/* </Link> */}

            </div>
          </div>
        </div>
      </div>
      <Footer />


    </div>
  );
};

export default Productdetail2;
