import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';

const Beverage = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '160px', // Adjust the width as needed
    height: '180px',


    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
 

  const imageStyle = {
    width: '90px',
    height: '80px',
    marginBottom: '2px',
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/Beverage?page=${page}`);
      console.log("response: ", response);
      console.log(response.data);
      setnumberOfPages(response.data.pages)
      setLoadProduct(!loadProduct)
      setProducts(response.data.data);
      console.log("Products" + response.data.data);
    } catch (error) {
      console.log("Error In Getting All Products ", error);
    }
  };

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])

    return (
<>

<Home/>
<div >
        
        <div className='flex justify-evenly flex-wrap my-4' >

        <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BJH219SE%20(2)-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Ice Cream & Yoghurt Machines</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ZB50--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Juice Dispensers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/LSJ18LX2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Juicer Machines</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CJ4-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Hand Mixers & immersion Blenders</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/XRJ12LX2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Slush Machines</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/E5-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bar Blenders</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DMB-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Milshakes & Bar Mixers</p>
      </div>
      </div>
      <div className='flex justify-evenly flex-wrap my-4' >
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/2EVYO-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Espresso Coffee Machines</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/RXG2001-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Filter Coffee Machines</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Cunill/Kenia-tron-2018-bl-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Coffee Grinders</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/GGG/KB120-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Percolators & Coffee Urns</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ENW30-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Water Boilers & Water Dispensers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CHOCO05-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Chocolate Machines</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CW1-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Cup Warmers</p>
      </div>
      
      
    </div>

      </div>
      <hr/>
<h1 className="flex  flex-wrap justify-center heads">Products</h1>
      <div className='flex  flex-wrap justify-center   '>
        {products.map((eachProduct, i) => (
          <Cardss index={eachProduct._id} price={eachProduct.price} img={eachProduct.imageUrl} text={eachProduct.name}  />
        ))}
      </div>


      <BasicPagination shape="rounded" setPage={setPage} pageNumber={numberOfPages} />

</>
    )
}
export default Beverage;