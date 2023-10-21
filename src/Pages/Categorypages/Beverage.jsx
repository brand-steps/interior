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

    const [icecream , Seticecream] = useState("Ice Cream & Yoghurt Machines");
    const [juice , Setjuice] = useState("Juice Dispensers");
    const [machine , Setmachine] = useState("Juicer Machines");
    const [mixers , Setmixers] = useState("Hand Mixers & immersion Blenders");
    const [slush , Setslush] = useState("Slush Machines");
    const [bar , Setbar] = useState("Bar Blenders");
    const [milshake , Setmilshake] = useState("Milshakes & Bar Mixers");
    const [espress , Setespress] = useState("Espresso Coffee Machines");
    const [filter , Setfilter] = useState("Filter Coffee Machines");
    const [coffee , Setcoffee] = useState("Coffee Grinders");
    const [percol , Setpercol] = useState("Percolators & Coffee Urns");
    const [water , Setwater] = useState("Water Boilers & Water Dispensers");
    const [choco , Setchoco] = useState("Chocolate Machines");
    const [cup , Setcup] = useState("Cup Warmers");
    
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

  
  const Geticecream = () => {
    navigate(`/Subcategorypage/${icecream}`)
  }
  const Getjuice = () => {
    navigate(`/Subcategorypage/${juice}`)
  }
  const Getmachine = () => {
    navigate(`/Subcategorypage/${machine}`)
  }
  const Getmixers = () => {
    navigate(`/Subcategorypage/${mixers}`)
  }
  const Getslush = () => {
    navigate(`/Subcategorypage/${slush}`)
  }
  const getbar = () => {
    navigate(`/Subcategorypage/${bar}`)
  }
  const getmilshake = () => {
    navigate(`/Subcategorypage/${milshake}`)
  }
    
  const Getespress = () => {
    navigate(`/Subcategorypage/${espress}`)
  }
  const Getfilter = () => {
    navigate(`/Subcategorypage/${filter}`)
  }
  const Getcoffee = () => {
    navigate(`/Subcategorypage/${coffee}`)
  }
  const Getpercol = () => {
    navigate(`/Subcategorypage/${percol}`)
  }
  const Getwater = () => {
    navigate(`/Subcategorypage/${water}`)
  }
  const getchoco = () => {
    navigate(`/Subcategorypage/${choco}`)
  }
  const getcup = () => {
    navigate(`/Subcategorypage/${cup}`)
  }

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])

    return (
<>

<Home/>
<div >
        
        <div className='flex justify-evenly flex-wrap my-4' >

        <div style={containerStyle} className="subhovers" onClick={Geticecream}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BJH219SE%20(2)-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Ice Cream & Yoghurt Machines</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ZB50--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Juice Dispensers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/LSJ18LX2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Juicer Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CJ4-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Hand Mixers & immersion Blenders</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/XRJ12LX2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Slush Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/E5-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bar Blenders</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DMB-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Milshakes & Bar Mixers</p>
      </div>
      </div>
      <div className='flex justify-evenly flex-wrap my-4' >
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/2EVYO-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Espresso Coffee Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/RXG2001-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Filter Coffee Machines</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src="https://adexa.co.uk/image/cache/catalog/Cunill/Kenia-tron-2018-bl-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Coffee Grinders</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src="https://adexa.co.uk/image/cache/catalog/GGG/KB120-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Percolators & Coffee Urns</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ENW30-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Water Boilers & Water Dispensers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getchoco}> 
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CHOCO05-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Chocolate Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcup}>
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