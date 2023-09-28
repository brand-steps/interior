import React, { useState , useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Foooter/Footer';
import Home from '../HOme/Home';
import ProductDetail from './ProductDetail.css'
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { MyContext } from '../Context/Context';
import CartContext from '../Context/CartContext';
const Productdetail = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const {name, setName} = useContext(MyContext);
  const {pricep , setPricep} = useContext(MyContext);
  const {description, setDescription} = useContext(MyContext);
  const {quantityProduct, setQuantityProduct} = useContext(MyContext);
  const {image , setImage } = useContext(MyContext);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parseFloat(pricep.key));
  const [showCart, setShowCart] = useState(false); // State to control cart slider visibility
  const allProduct = [name ,  totalPrice , description , image , quantity , totalPrice]
  // setQuantityProduct({ ...image, key: img });
  const [showPopup, setShowPopup] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [neutral , setNeutral ] = useState(false);


  const productCheckOut = () => {
    setShowDiv(true);
    addToCart(allProduct)

    // Automatically hide the div after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      setShowDiv(false);
    }, 5000);
  }; 

  const closeDiv = () => {
    setShowDiv(false);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + parseFloat(pricep.key));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - parseFloat(pricep.key));
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
      <div className="bg-gray-100 py-6 flex flex-wrap ">
          <div      style={{"border" : "1px solid black"}}    className='mx-12 p-8'  >

<div   >
<div className='text-md mb-1' >View</div>
         <div    style={{"border" : "1px solid black"}}  className='w-20 px-2	flex justify-between '    >

         <i class="fas fa-th-large text-2xl"></i>
          <i class="fas fa-th-list text-2xl"></i>

         </div>
</div>


<label class="block text-gray-700 text-md  mb-2" for="username">
Search
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>




<div>Width (mm)</div>
<div className='p-2' style={{"border" : "1px solid black"}}>
  <div class="flex items-center">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="checked-checkbox-1" class="ml-2 text-sm font-medium text-black">1400</label>
  </div>
  <div class="flex items-center">
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="checked-checkbox-2" class="ml-2 text-sm font-medium text-black">800</label>
  </div>
</div>

<span>Length (mm)</span>
<div    className='p-2'  style={{"border" : "1px solid black"}} >
<div class="flex items-center">
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="checked-checkbox" class="ml-2 text-sm font-medium  text-black">1400</label>
</div>
<div class="flex items-center">
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="checked-checkbox" class="ml-2 text-sm font-medium  text-black">800</label>
</div>

</div>


<span>height  (mm)</span>
<div   className='p-2'   style={{"border" : "1px solid black"}} >

<div class="flex items-center">
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="checked-checkbox" class="ml-2 text-sm font-medium text-black ">1980</label>
</div>
<div class="flex items-center">
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="checked-checkbox" class="ml-2 text-sm font-medium text-black">2050</label>
</div>
</div>




          </div>
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full md:w-2/3 self-center	">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <img
                  src={image.key}
                  alt="Product"
                  className="object-cover rounded-lg shadow-md w-full"
                />
            </div>
            <div  className="md:w-1/2 pl-4 md:pl-6">
              {/* <img src={image.key} alt="" /> */}
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 md:mb-4">
                {name.key}
              </h1>
              <p className="text-gray-600 mb-4">
                {description.key}
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
        onClick={productCheckOut}
      >
        Add to Cart
      </button>
      {showDiv && (
        <div   style={{"zIndex" : "100" , "backgroundColor" : "rgb(236, 12, 54)" }} className="fixed bottom-0 left-0    right-0  p-4 border-t border-gray-300 text-white ">
          <div className="flex justify-between items-center">
            <p  className='' >Your Product  has been added to the cart . <span   className='font-bold'  style={{"textDecoration" : "underline "}} ><Link to={'/CardPage'} >Click Here </Link></span></p> 
            <button onClick={closeDiv} className="text-red-500">
              <svg
              style={{"color" : "white"}}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

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

export default Productdetail;
