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
      const response = await axios.get(`http://localhost:8000/Stainlesssteel?page=${page}`);
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
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CEKF28-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Table Top Fryers</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/AD5-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Countertop Mixers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EG720D-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Griddles</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/D100N38--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Microwaves</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GX812-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Panini / Contact Grills</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/images/categories/roller-grill-category-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Roller Grills</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/TC2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Food Warming</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HD105-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Hotdog Warmers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa//RTR120-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Heated Merchandisers / Displays</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EMO3K5S-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Induction Cookers</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BN1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Table Top Bains Marie & Hotpots</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SB6000--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Soup Kettles</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/rice-cooker-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Rice Cookers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EB-450-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Salamanders</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ETS6A-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Toasters</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/YBWA10-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Pressure Cookers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SV100-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sous Vide & Slow Cookers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/WM2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Waffle Makers</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BST001-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Knife Sterilisers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EGG-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Egg Boilers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/PC02-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Popcorn Machines</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ECF520C-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Candy Floss Machines</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GC216-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Insect Killers</p>
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