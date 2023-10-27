import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';

const Ovens = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Electric Convection Ovens Manual Controls");
    const [juice , Setjuice] = useState("Electric Combi Steamers Manual Controls");
    const [machine , Setmachine] = useState("Electric Combi Steamers Digital Controls");
    const [mixers , Setmixers] = useState("Electric Bakery Ovens");
    const [slush , Setslush] = useState("Air Fryers");
    const [bar , Setbar] = useState("Mini Ovens");
    const [milshake , Setmilshake] = useState("Proofers, Proofing Ovens & Dehydrators");
    const [espress , Setespress] = useState("Potato Ovens");
    const [filter , Setfilter] = useState("Rotisseries Ovens");
    const [coffee , Setcoffee] = useState("Microwave Ovens");
    const [percol , Setpercol] = useState("Modular Cooking Ovens");
    const [water , Setwater] = useState("Oven Trays & Grids");    
    

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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/ovens?page=${page}`);
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
        <img src="https://adexa.co.uk/image/cache/catalog/Tecnoeka/EKF423UP--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Electric Convection Ovens Manual Controls</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EKF1016UD-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Electric Combi Steamers Manual Controls</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src="https://adexa.co.uk/image/cache/catalog/Tecnoeka/EKF1111TC-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Electric Combi Steamers Digital Controls</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/PB2M88-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Electric Bakery Ovens</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ATS25K-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Air Fryers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/TO1601-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Mini Ovens</p>
      </div>
      </div>
      <div className='flex justify-evenly flex-wrap my-4' >
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src="https://adexa.co.uk/image/cache/catalog/Tecnoeka/EKL864R--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Proofers, Proofing Ovens & Dehydrators</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/KFE030-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Potato Ovens</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CRG4-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Rotisseries Ovens</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THASR-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Microwave Ovens</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/7FRE01-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Modular Cooking Ovens</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BR11-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Oven Trays & Grids</p>
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
export default Ovens;