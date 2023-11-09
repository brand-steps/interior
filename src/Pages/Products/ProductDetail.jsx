import React, { useState , useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Foooter/Footer';
import Home from '../HOme/Home';
import ProductDetail from './ProductDetail.css'
import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { MyContext } from '../Context/Context';
import CartContext from '../Context/CartContext';
import { Table } from 'flowbite-react';

const Productdetail = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const {name, setName} = useContext(MyContext);
  const {pricep , setPricep} = useContext(MyContext);
  const {description, setDescription} = useContext(MyContext);
  const {quantityProduct, setQuantityProduct} = useContext(MyContext);
  const {image , setImage } = useContext(MyContext);
  const {category , setcategory } = useContext(MyContext);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parseFloat(pricep.key));
  const [showCart, setShowCart] = useState(false); // State to control cart slider visibility
  const allProduct = [name ,  totalPrice , description , image , quantity , totalPrice]
  // setQuantityProduct({ ...image, key: img });
  const [showPopup, setShowPopup] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [neutral , setNeutral ] = useState(false);
  const [specshow , setSpecshow ] = useState(false);

  const {color , setcolor } = useContext(MyContext);
  const {material , setmaterial } = useContext(MyContext);
  const {capacity , setCapacity } = useContext(MyContext);
  const {shelves , setshelves } = useContext(MyContext);
  const {lid , setlid } = useContext(MyContext);
  const {lightening , setlightening } = useContext(MyContext);
  const {level , setlevel } = useContext(MyContext);
  const {door , setdoor } = useContext(MyContext);
  const {Width , setWidth } = useContext(MyContext);
  const {depth , setDepth } = useContext(MyContext);
  const {height , setHeight } = useContext(MyContext);
  const {weight , setWeight } = useContext(MyContext);
  const {consumption , setconsumption } = useContext(MyContext);
  const {supply , setsupply } = useContext(MyContext);
  const {power , setPower } = useContext(MyContext);
  const {temperature , settemperature } = useContext(MyContext);
  const {refrigerant , setrefrigerant } = useContext(MyContext);
  const {cooling , setcooling } = useContext(MyContext);
  const {warranty , setwarranty } = useContext(MyContext);
  const {castors , setcastors } = useContext(MyContext);
  const {tray , settray } = useContext(MyContext);
  const {pressure , setpressure } = useContext(MyContext);
  const {production , setproduction } = useContext(MyContext);
  const {innerheight , setinnerheight } = useContext(MyContext);
  const {basket , setbasket } = useContext(MyContext);
  const {programs , setprograms } = useContext(MyContext);
  const {volume , setvolume } = useContext(MyContext);
  const {cycles , setcycles } = useContext(MyContext);
  const {pump , setpump } = useContext(MyContext);
  const {rinsepower , setrinsepower } = useContext(MyContext);
  const {dispenser , setdispenser } = useContext(MyContext);
  const {rinsefunc , setrinsefunc } = useContext(MyContext);
  const {volumerinse , setvolumerinse } = useContext(MyContext);
  const {version , setversion } = useContext(MyContext);
  const {tap , settap } = useContext(MyContext);
  const {output , setoutput } = useContext(MyContext);
  const {feet , setfeet } = useContext(MyContext);
  const {bottomshelf , setbottomshelf } = useContext(MyContext);
  const {bowlpos , setbowlpos } = useContext(MyContext);
  const {sinkbowl , setsinkbowl } = useContext(MyContext);
  const {upstand , setupstand } = useContext(MyContext);
  const {assembly , setassembly } = useContext(MyContext);
  const {timer , settimer } = useContext(MyContext);
  const {controls , setcontrols } = useContext(MyContext);
  const {rpm , setrpm } = useContext(MyContext);
  const {speeds , setspeeds } = useContext(MyContext);
  const {included , setincluded } = useContext(MyContext);
  const {weldingbar , setweldingbar } = useContext(MyContext);
  const {bin , setbin } = useContext(MyContext);
  const {waterconnection , setwaterconnection } = useContext(MyContext);
  const {type , settype } = useContext(MyContext);
  const {lock , setlock } = useContext(MyContext);
  const {worksurface , setworksurface } = useContext(MyContext);
  const {gasconsumption , setgasconsumption } = useContext(MyContext);
  const {defrost , setdefrost } = useContext(MyContext);
  const {steam , setsteam } = useContext(MyContext);
  const {pieces , setpieces } = useContext(MyContext);
  const {diameter , setdiameter } = useContext(MyContext);
  const {length , setlength } = useContext(MyContext);

  const buttonStyle = {
    background: '#EC0C36',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    width: '100px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '8px',
    width: '850px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
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
              <p className="text-gray-600 text-xs">
                Brand: Equipment Supplier
              </p>
              <p className="text-gray-600 text-xs mb-4">
                Availability: <span className='text-green-600'>In stock</span>
              </p>
             {/* <p className="text-gray-600 mb-4">
                {description.key}
                </p> 
  */}
              <p className="text-lg md:text-2xl text-red-600 font-semibold mb-2">
              £{totalPrice.toFixed(2)} 
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

          <div className='flex  justify-evenly flex-wrap my-4'>
      <div style={containerStyle}>
<button style={buttonStyle} onClick={() => {setSpecshow(false)}}>Description</button>
      </div>
      <div style={containerStyle}>

<button style={buttonStyle} onClick={() => {setSpecshow(true)}}>Specification</button>
      </div>


    </div>
    {specshow ? (<>
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 md:mb-6">
                Specification
              </h1>
      {category.key === "Refrigeration" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                           {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                           {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Capacity
                         </Table.Cell>
                         <Table.Cell>
                           {capacity.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Shelves
                         </Table.Cell>
                         <Table.Cell>
                         {shelves.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           No of lids
                         </Table.Cell>
                         <Table.Cell>
                         {lid.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Lightening
                         </Table.Cell>
                         <Table.Cell>
                         {lightening.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Noise level
                         </Table.Cell>
                         <Table.Cell>
                         {level.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Doors
                         </Table.Cell>
                         <Table.Cell>
                         {door.key}
                         </Table.Cell>
                       </Table.Row>

                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>

                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Power supply
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power consumption
                         </Table.Cell>
                         <Table.Cell>
                         {consumption.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power supply
                         </Table.Cell>
                         <Table.Cell>
                         {supply.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power
                         </Table.Cell>
                         <Table.Cell>
                         {power.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Temperature
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Temperature
                         </Table.Cell>
                         <Table.Cell>
                         {temperature.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Cooling
                         </Table.Cell>
                         <Table.Cell>
                         {cooling.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Refrigerant
                         </Table.Cell>
                         <Table.Cell>
                         {refrigerant.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
                      {category.key === "Diswashing" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Capacity
                         </Table.Cell>
                         <Table.Cell>
                         {capacity.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Water pressure inlet
                         </Table.Cell>
                         <Table.Cell>
                         {pressure.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Product casters
                         </Table.Cell>
                         <Table.Cell>
                         {castors.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Tray / Grid Size
                         </Table.Cell>
                         <Table.Cell>
                         {tray.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Production
                         </Table.Cell>
                         <Table.Cell>
                         {production.key}
                         </Table.Cell>
                       </Table.Row>
                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Inner height
                         </Table.Cell>
                         <Table.Cell>
                         {innerheight.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Basket size
                         </Table.Cell>
                         <Table.Cell>
                         {basket.key}
                         </Table.Cell>
                       </Table.Row>

                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Power supply
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power consumption
                         </Table.Cell>
                         <Table.Cell>
                         {consumption.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power supply
                         </Table.Cell>
                         <Table.Cell>
                         {supply.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power
                         </Table.Cell>
                         <Table.Cell>
                         {power.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Temperature
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Temperature
                         </Table.Cell>
                         <Table.Cell>
                         {temperature.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Dishwashing & Rinsing
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Volume wash tank
                         </Table.Cell>
                         <Table.Cell>
                         {volume.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Programs
                         </Table.Cell>
                         <Table.Cell>
                         {programs.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Washing cycles
                         </Table.Cell>
                         <Table.Cell>
                         {cycles.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Drain pump
                         </Table.Cell>
                         <Table.Cell>
                         {pump.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Rinse tank power
                         </Table.Cell>
                         <Table.Cell>
                         {rinsepower.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Rinse aid dispenser
                         </Table.Cell>
                         <Table.Cell>
                         {dispenser.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Rinse function
                         </Table.Cell>
                         <Table.Cell>
                         {rinsefunc.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Volume rinse tank
                         </Table.Cell>
                         <Table.Cell>
                         {volumerinse.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
                      {category.key === "Appliances" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Capacity
                         </Table.Cell>
                         <Table.Cell>
                         {capacity.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Version
                         </Table.Cell>
                         <Table.Cell>
                         {version.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Dranage tap
                         </Table.Cell>
                         <Table.Cell>
                         {tap.key}
                         </Table.Cell>
                       </Table.Row>

                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Inner Height
                         </Table.Cell>
                         <Table.Cell>
                         {innerheight.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Product Output
                         </Table.Cell>
                         <Table.Cell>
                         {output.key}
                         </Table.Cell>
                       </Table.Row>

                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Power supply
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power consumption
                         </Table.Cell>
                         <Table.Cell>
                         {consumption.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power supply
                         </Table.Cell>
                         <Table.Cell>
                         {supply.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power
                         </Table.Cell>
                         <Table.Cell>
                         {power.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Temperature
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Temperature
                         </Table.Cell>
                         <Table.Cell>
                         {temperature.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
                      {category.key === "Stainless Steel" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Bottom shelf
                         </Table.Cell>
                         <Table.Cell>
                         {bottomshelf.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Bowl position
                         </Table.Cell>
                         <Table.Cell>
                         {bowlpos.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Sink bowls
                         </Table.Cell>
                         <Table.Cell>
                         {sinkbowl.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Feets
                         </Table.Cell>
                         <Table.Cell>
                         {feet.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Upstand size
                         </Table.Cell>
                         <Table.Cell>
                         {upstand.key}
                         </Table.Cell>
                       </Table.Row>

                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>

                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Assembled
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Assembled
                         </Table.Cell>
                         <Table.Cell>
                         {assembly.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                      
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
                      {category.key === "Cooking" && (
                     <> 
                     <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Timer
                         </Table.Cell>
                         <Table.Cell>
                         {timer.key}
                         </Table.Cell>
                       </Table.Row>
                       
                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Inner Height
                         </Table.Cell>
                         <Table.Cell>
                         {innerheight.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Controls
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Controls
                         </Table.Cell>
                         <Table.Cell>
                         {controls.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Power supply
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power consumption
                         </Table.Cell>
                         <Table.Cell>
                         {consumption.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power supply
                         </Table.Cell>
                         <Table.Cell>
                         {supply.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power
                         </Table.Cell>
                         <Table.Cell>
                         {power.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Temperature
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Temperature
                         </Table.Cell>
                         <Table.Cell>
                         {temperature.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
                      {category.key === "Food prep" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           RPM
                         </Table.Cell>
                         <Table.Cell>
                         {rpm.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Speeds
                         </Table.Cell>
                         <Table.Cell>
                         {speeds.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Included
                         </Table.Cell>
                         <Table.Cell>
                         {included.key}
                         </Table.Cell>
                       </Table.Row>
                       
                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Power supply
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power consumption
                         </Table.Cell>
                         <Table.Cell>
                         {consumption.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power supply
                         </Table.Cell>
                         <Table.Cell>
                         {supply.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power
                         </Table.Cell>
                         <Table.Cell>
                         {power.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                     
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
                      {category.key === "Beverage Equipment" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Capacity
                         </Table.Cell>
                         <Table.Cell>
                         {capacity.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Bin
                         </Table.Cell>
                         <Table.Cell>
                         {bin.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Water connection
                         </Table.Cell>
                         <Table.Cell>
                         {waterconnection.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Type
                         </Table.Cell>
                         <Table.Cell>
                         {type.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Production
                         </Table.Cell>
                         <Table.Cell>
                         {production.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Noise level
                         </Table.Cell>
                         <Table.Cell>
                         {level.key}
                         </Table.Cell>
                       </Table.Row>

                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>

                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Power supply
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power supply
                         </Table.Cell>
                         <Table.Cell>
                         {supply.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power
                         </Table.Cell>
                         <Table.Cell>
                         {power.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Temperature
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Temperature
                         </Table.Cell>
                         <Table.Cell>
                         {temperature.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Cooling
                         </Table.Cell>
                         <Table.Cell>
                         {cooling.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Refrigerant
                         </Table.Cell>
                         <Table.Cell>
                         {refrigerant.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
                      {category.key === "Pizzeria & Grill" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Capacity
                         </Table.Cell>
                         <Table.Cell>
                         {capacity.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Lock
                         </Table.Cell>
                         <Table.Cell>
                         {lock.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Shelves
                         </Table.Cell>
                         <Table.Cell>
                         {shelves.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Work surface
                         </Table.Cell>
                         <Table.Cell>
                         {worksurface.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Tray / Grid size
                         </Table.Cell>
                         <Table.Cell>
                         {tray.key}
                         </Table.Cell>
                       </Table.Row>
                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>

                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Power supply
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Gas consumption
                         </Table.Cell>
                         <Table.Cell>
                         {gasconsumption.key}
                         </Table.Cell>
                       </Table.Row>
                     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power consumption
                         </Table.Cell>
                         <Table.Cell>
                         {consumption.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power supply
                         </Table.Cell>
                         <Table.Cell>
                         {supply.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power
                         </Table.Cell>
                         <Table.Cell>
                         {power.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Controls
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Controls
                         </Table.Cell>
                         <Table.Cell>
                         {controls.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Temperature
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Temperature
                         </Table.Cell>
                         <Table.Cell>
                         {temperature.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Cooling
                         </Table.Cell>
                         <Table.Cell>
                         {cooling.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Refrigerant
                         </Table.Cell>
                         <Table.Cell>
                         {refrigerant.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Defrost
                         </Table.Cell>
                         <Table.Cell>
                         {defrost.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
                      {category.key === "Oven & Steamers" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Capacity
                         </Table.Cell>
                         <Table.Cell>
                         {capacity.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Steam / Humidification
                         </Table.Cell>
                         <Table.Cell>
                         {steam.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Timer
                         </Table.Cell>
                         <Table.Cell>
                         {timer.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Included
                         </Table.Cell>
                         <Table.Cell>
                         {included.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Tray / Grid size
                         </Table.Cell>
                         <Table.Cell>
                         {tray.key}
                         </Table.Cell>
                       </Table.Row>
                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Weight
                         </Table.Cell>
                         <Table.Cell>
                         {weight.key}
                         </Table.Cell>
                       </Table.Row>

                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Power supply
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Output
                         </Table.Cell>
                         <Table.Cell>
                         {output.key}
                         </Table.Cell>
                       </Table.Row>
                     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power consumption
                         </Table.Cell>
                         <Table.Cell>
                         {consumption.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power supply
                         </Table.Cell>
                         <Table.Cell>
                         {supply.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Power
                         </Table.Cell>
                         <Table.Cell>
                         {power.key}
                         </Table.Cell>
                       </Table.Row>
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Controls
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Controls
                         </Table.Cell>
                         <Table.Cell>
                         {controls.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Temperature
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Temperature
                         </Table.Cell>
                         <Table.Cell>
                         {temperature.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
              {category.key === "Utensils" && (
                     <> <div className='flex  justify-evenly flex-wrap my-4'>
                     <div style={containerStyle2}>
                    
                     <Table>
                     <Table.Head>
                       <Table.HeadCell>
                       Miscellaneous
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Color
                         </Table.Cell>
                         <Table.Cell>
                         {color.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Material
                         </Table.Cell>
                         <Table.Cell>
                         {material.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Capacity
                         </Table.Cell>
                         <Table.Cell>
                         {capacity.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Pieces
                         </Table.Cell>
                         <Table.Cell>
                         {pieces.key}
                         </Table.Cell>
                       </Table.Row>
                       
                     </Table.Body>
                     <Table.Head>
                       <Table.HeadCell>
                       Dimensions
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Width
                         </Table.Cell>
                         <Table.Cell>
                         {Width.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Depth
                         </Table.Cell>
                         <Table.Cell>
                         {depth.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Height
                         </Table.Cell>
                         <Table.Cell>
                         {height.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Length
                         </Table.Cell>
                         <Table.Cell>
                         {length.key}
                         </Table.Cell>
                       </Table.Row>
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                         Diameter
                         </Table.Cell>
                         <Table.Cell>
                         {diameter.key}
                         </Table.Cell>
                       </Table.Row>

                       </Table.Body>
                     
                       <Table.Head>
                       <Table.HeadCell>
                       Warranty
                       </Table.HeadCell>
                       <Table.HeadCell>
                         
                       </Table.HeadCell>
                       
                     </Table.Head>
                     <Table.Body className="divide-y">
                       <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                           Warranty
                         </Table.Cell>
                         <Table.Cell>
                         {warranty.key}
                         </Table.Cell>
                       </Table.Row>
                      
                       </Table.Body>
                   </Table>
                     </div>
                     
                   </div></>
        )}
    </>):<>


    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 md:mb-4">
                Description
              </h1>
          <p className="text-gray-600 mb-4 mt-7">
                {description.key}
              </p>
    </>}


    
        </div>
      </div>
      <Footer />


    </div>
  );
};

export default Productdetail;
