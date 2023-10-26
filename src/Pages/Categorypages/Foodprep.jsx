import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';

const Foodprep = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Planetary Mixers");
    const [juice , Setjuice] = useState("Spiral Mixers & Dough Kneaders");
    const [machine , Setmachine] = useState("Vegetable Prep Machines");
    const [mixers , Setmixers] = useState("Hand Mixers & immersion Blenders");
    const [slush , Setslush] = useState("Meat Mincers");
    const [bar , Setbar] = useState("Meat Slicers");
    const [milshake , Setmilshake] = useState("Bone Saw Machines");
    const [espress , Setespress] = useState("Sausage Stuffers");
    const [filter , Setfilter] = useState("Potato peelers");
    const [coffee , Setcoffee] = useState("Bread Slicers");
    const [percol , Setpercol] = useState("Vacuum Machines");
    const [water , Setwater] = useState("Hamburger Presses");

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
      const response = await axios.get(`http://localhost:8000/Foodprep?page=${page}`);
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
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CM10-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Planetary Mixers</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DN50B-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Spiral Mixers & Dough Kneaders</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HLC300-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Vegetable Prep Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HM265-3-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Hand Mixers & immersion Blenders</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/G79-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Meat Mincers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HBS220-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Meat Slicers</p>
      </div>
      </div>
      <div className='flex justify-evenly flex-wrap my-4' >
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HLS-202-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bone Saw Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SV-5-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sausage Stuffers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HLP20-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Potato peelers</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EK4332-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bread Slicers</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/STV030-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Vacuum Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src="https://adexa.co.uk/image/cache/catalog/GGG/HF-100-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Hamburger Presses</p>
      </div>
      
     
      
    </div>

      </div>
      <hr/>
<h1 className="flex  flex-wrap justify-center heads">Products</h1>
<div className='flex  flex-wrap justify-center   '>
        {products.map((eachProduct, i) => (
          <Cardss index={eachProduct._id} price={eachProduct.price} img={eachProduct.imageUrl} text={eachProduct.name} 
          paragraph={eachProduct.description} cats={eachProduct.category} colors={eachProduct.color}
          mats={eachProduct.material} capicitys = {eachProduct.capacity} shelf = {eachProduct.shelves} lids = {eachProduct.lid} 
          lights = {eachProduct.lightening} levels = {eachProduct.noiselevel} doors = {eachProduct.door} widths = {eachProduct.Width}
          depths = {eachProduct.depth} heights = {eachProduct.height} weights = {eachProduct.weight} consumptions = {eachProduct.powerconsumption}
          supplys = {eachProduct.powersupply} powers = {eachProduct.power} temps = {eachProduct.temperature} refris = {eachProduct.refrigerant}
          coolings = {eachProduct.cooling} warrantys = {eachProduct.warranty} castorss = {eachProduct.castors} trays = {eachProduct.tray}
          pressures = {eachProduct.pressure} productions = {eachProduct.production} innerheights = {eachProduct.innerheight} baskets = {eachProduct.basket}
          programss = {eachProduct.programs} volumes = {eachProduct.volume} cycless = {eachProduct.watercycles} pumps = {eachProduct.waterpump}
          rinsepowers = {eachProduct.rinsepower} dispensers = {eachProduct.dispenser} rinsefuncs = {eachProduct.rinsefunc} volumerinses = {eachProduct.volumerinse}
          versions = {eachProduct.version} taps = {eachProduct.tap} outputs = {eachProduct.output} feets = {eachProduct.productfeet}
          bottomshelfs = {eachProduct.bottomshelf} bowlposs = {eachProduct.bowlpos} sinkbowls = {eachProduct.sinkbowl} upstands = {eachProduct.upstand}
          assemblys = {eachProduct.assembled} timers = {eachProduct.timer} controlss = {eachProduct.controls} rpms = {eachProduct.rpm}
          speedss = {eachProduct.speeds} includeds = {eachProduct.included} weldingbars = {eachProduct.weldingbar} bins = {eachProduct.bin}
          waterconnections = {eachProduct.waterconnection} types = {eachProduct.type} locks = {eachProduct.lock} worksurfaces = {eachProduct.worksurface}
          gasconsumptions = {eachProduct.gasconsumption} defrosts = {eachProduct.defrost} steams = {eachProduct.steam} piecess = {eachProduct.pieces}
          diameters = {eachProduct.diameter} lengths = {eachProduct.length}

          />
        ))}
      </div>


      <BasicPagination shape="rounded" setPage={setPage} pageNumber={numberOfPages} />

</>
    )
}
export default Foodprep;