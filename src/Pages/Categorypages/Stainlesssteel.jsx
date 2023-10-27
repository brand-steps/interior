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

    const [icecream , Seticecream] = useState("Work Tables");
    const [juice , Setjuice] = useState("Sink Units with 1 & 2 Bowls");
    const [machine , Setmachine] = useState("Sink Units with 3 Bowls");
    const [mixers , Setmixers] = useState("Sink Top Storage Cupboards");
    const [slush , Setslush] = useState("Sink Tops");
    const [bar , Setbar] = useState("Sink Units For Dishwashers");
    const [milshake , Setmilshake] = useState("Wall Shelves");
    const [espress , Setespress] = useState("Wash Basin & Hand Sinks");
    const [filter , Setfilter] = useState("Bar Sinks");
    const [coffee , Setcoffee] = useState("Base Storage Cupboards");
    const [percol , Setpercol] = useState("Ice Bins");
    const [water , Setwater] = useState("Plain Top Hot Cupboards");
    const [choco , Setchoco] = useState("Cabinet Storage Cupboards");
    const [cup , Setcup] = useState("Work Stations");    
    const [Glass , SetGlass] = useState("Wall Cupboards");
    const [underdish , Setunderdish] = useState("Gantries & Chefs Passes");
    const [passthrough , Setpassthrough] = useState("Extraction Canopies");
    const [dishwash , Sedishwash] = useState("Grease Traps & Fat Seperators");
    const [cuttlery , Setcuttlery] = useState("Shelving Units");
    const [shower , Setshower] = useState("Equipment Stands");
    const [racks , Setracks] = useState("Waste Bins");
    const [candy , Setcandy] = useState("Trolleys & Carts");
    const [insect , Setinsect] = useState("Stainless Steel GN Pans & Container");    

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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/StainlessSteel?page=${page}`);
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
  const GetGlass = () => {
    navigate(`/Subcategorypage/${Glass}`)
  }
  const Getunderdish = () => {
    navigate(`/Subcategorypage/${underdish}`)
  }
  const Getpassthrough = () => {
    navigate(`/Subcategorypage/${passthrough}`)
  }
  const Getdishwash = () => {
    navigate(`/Subcategorypage/${dishwash}`)
  }
  const Getcuttlery = () => {
    navigate(`/Subcategorypage/${cuttlery}`)
  }
  const getshower = () => {
    navigate(`/Subcategorypage/${shower}`)
  }
  const getracks = () => {
    navigate(`/Subcategorypage/${racks}`)
  }
  const getcandy = () => {
    navigate(`/Subcategorypage/${candy}`)
  }
  const getinsect = () => {
    navigate(`/Subcategorypage/${insect}`)
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
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/TA710D-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Work Tables</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getjuice}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SN610DL-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sink Units with 1 & 2 Bowls</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmachine}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HJS1803-6-175x175.JPG" alt="Fairs" style={imageStyle} />
        <p>Sink Units with 3 Bowls</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getmixers}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DSN610L-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sink Top Storage Cupboards</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getslush}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HMS77F-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sink Tops</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbar}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SR612DL-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sink Units For Dishwashers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getmilshake}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/DRD305-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wall Shelves</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getespress}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THHWR43K-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wash Basin & Hand Sinks</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getfilter}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BAR2B48LR-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bar Sinks</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcoffee}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THASR-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Base Storage Cupboards</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getpercol}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/IB182408-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Ice Bins</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwater}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THWSR-A-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Plain Top Hot Cupboards</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getchoco}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ED612D-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Cabinet Storage Cupboards</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcup}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GW2400-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Work Stations</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={GetGlass}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/WCR-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wall Cupboards</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getunderdish}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/gantry-2-levels-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Gantries & Chefs Passes</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getpassthrough}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HKF-HLF-HMF-1-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Extraction Canopies</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getdishwash}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/OS-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Grease Traps & Fat Seperators</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={Getcuttlery}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SV412C-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Shelving Units</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getshower}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ES4187660-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Equipment Stands</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getracks}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/WT95-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Waste Bins</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcandy}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/C102-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Trolleys & Carts</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getinsect}>
        <img src="https://adexa.co.uk/image/cache/catalog/Misc/tray-stainless-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Stainless Steel GN Pans & Containers</p>
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
export default Stainlesssteel;