import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';

const Refrigration = () => {

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
      const response = await axios.get(`http://localhost:8000/Refrigration?page=${page}`);
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
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BCD90-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Beer Fridges</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BSS230H-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Back Bar Refrigerators</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BC46-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Mini Fridges</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/LG-332BF-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bottle Coolers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SN188-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wine Coolers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SR20S-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Undercounter Fridges</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/AGN650TNG-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Glass Door Fridges</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SF200G-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Undercounter Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ZB50-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Ice Makers</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SR60VS-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Upright Fridges</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GN1410TN--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Upright Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/images/categories/chest-freezers-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Chest Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/RTW120-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Refrigerated Displays & Merchandisers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/GGM/CS-1000ER2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Cake Counters & Patisserie Showcases</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Coreco/CVED-10-20-R--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Serve Over Counters & Deli Display Refrigerators</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GN3160TN-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Counter Fridges</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SW415N-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Dry Aging Refrigerators</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/H1800-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Low Refrigerated COunters / Chef Bases</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GN3100BT--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Counter Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/PZ3600-VRX-castors-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Refrigerated Pizza Tables</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/PS200-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Salad & Sandwitch Preparation Counters</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/S900-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Saladettes</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THSAI188-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Display Refrigerated Counters</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GN3100BT--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bakery Refrigeration</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/VRX-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Refrigerated Prep Tops</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/RTS132--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sushi & Tapas Display Showcases</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BLF-10-13-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Multi Deck Displays & Refrigerated Wall Cabinets</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/VFCIF250-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Supermarket Refrigerators</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BCF40-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Blast Chillers & Flash Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/Cold-Room-01-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Cold Rooms & Freezer Rooms</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/STP1310-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Display Refrigeration</p>
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
export default Refrigration;