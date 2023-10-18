import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';

const Cooking = () => {

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
      const response = await axios.get(`http://localhost:8000/Cooking?page=${page}`);
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
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ER721KS-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Boiling Tops & Hobs</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EMO3K5S-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Induction</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GR922-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Range Ovens & Floor Standing Cookers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EB606-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bains Marie & Hotpots</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GGL721S-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Chargrills & Gas Grills</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SE21-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>BBQ Grills</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EPC711-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Chip Scuttles</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GF912-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Fryers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EG606-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Griddles</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/7ME0102016-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Pasta Boilers</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EP922-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Tilting Bratt Pans</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THZ2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wok Stoves</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/7TS020-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bases & Neutral Units</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/hotmax600-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Modular Cooking Ranges</p>
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
export default Cooking;