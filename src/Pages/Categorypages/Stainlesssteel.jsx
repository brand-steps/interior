import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';

const Stainlesssteel = () => {

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
      const response = await axios.get(`http://localhost:8000/StainlessSteel?page=${page}`);
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
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/TA710D-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Work Tables</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SN610DL-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sink Units with 1 & 2 Bowls</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HJS1803-6-175x175.JPG" alt="Fairs" style={imageStyle} />
        <p>Sink Units with 3 Bowls</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DSN610L-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sink Top Storage Cupboards</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HMS77F-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sink Tops</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SR612DL-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sink Units For Dishwashers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DRD305-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wall Shelves</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THHWR43K-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wash Basin & Hand Sinks</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BAR2B48LR-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bar Sinks</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THASR-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Base Storage Cupboards</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/IB182408-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Ice Bins</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THWSR-A-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Plain Top Hot Cupboards</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ED612D-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Cabinet Storage Cupboards</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GW2400-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Work Stations</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/WCR-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wall Cupboards</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/gantry-2-levels-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Gantries & Chefs Passes</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HKF-HLF-HMF-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Extraction Canopies</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/OS-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Grease Traps & Fat Seperators</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SV412C-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Shelving Units</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ES4187660-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Equipment Stands</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/WT95-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Waste Bins</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/C102-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Trolleys & Carts</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Misc/tray-stainless-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Stainless Steel GN Pans & Containers</p>
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
export default Stainlesssteel;