import { useNavigate } from "react-router-dom";
import Cardss from "../Products/Cardss";
import BasicPagination from "../Products/Pagination";
import React, { useState, useEffect } from 'react'
import Home from "../HOme/Home";
import axios from 'axios'
import './categorypages.css';

const Appliances = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loadProduct, setLoadProduct] = useState(false)
    const [page, setPage] = useState(1)
    const [numberOfPages, setnumberOfPages] = useState(9)
    const [StarsArray, setStarsArray] = useState([1, 2, 3])

    const [icecream , Seticecream] = useState("Table Top Fryers");
    const [juice , Setjuice] = useState("Countertop Mixers");
    const [machine , Setmachine] = useState("Griddles");
    const [mixers , Setmixers] = useState("Microwaves");
    const [slush , Setslush] = useState("Panini / Contact Grills");
    const [bar , Setbar] = useState("Roller Grills");
    const [milshake , Setmilshake] = useState("Food Warming");
    const [espress , Setespress] = useState("Hotdog Warmers");
    const [filter , Setfilter] = useState("Heated Merchandisers / Displays");
    const [coffee , Setcoffee] = useState("Induction Cookers");
    const [percol , Setpercol] = useState("Table Top Bains Marie & Hotpots");
    const [water , Setwater] = useState("Soup Kettles");
    const [choco , Setchoco] = useState("Rice Cookers");
    const [cup , Setcup] = useState("Salamanders");    
    const [Glass , SetGlass] = useState("Toasters");
    const [underdish , Setunderdish] = useState("Pressure Cookers");
    const [passthrough , Setpassthrough] = useState("Sous Vide & Slow Cookers");
    const [dishwash , Sedishwash] = useState("Waffle Makers");
    const [cuttlery , Setcuttlery] = useState("Knife Sterilisers");
    const [shower , Setshower] = useState("Egg Boilers");
    const [racks , Setracks] = useState("Popcorn Machines");
    const [candy , Setcandy] = useState("Candy Floss Machines");
    const [insect , Setinsect] = useState("Insect Killers");

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
      const response = await axios.get(`https://sore-cyan-fly-kit.cyclic.app/Appliances?page=${page}`);
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

        <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/CEKF28-175x175.jpg" onClick={Geticecream} alt="Fairs" style={imageStyle} />
        <p>Table Top Fryers</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/AD5-175x175.jpg" onClick={Getjuice} alt="Fairs" style={imageStyle} />
        <p>Countertop Mixers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EG720D-1-175x175.jpg" onClick={Getmachine} alt="Fairs" style={imageStyle} />
        <p>Griddles</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/D100N38--175x175.jpg" onClick={Getmixers} alt="Fairs" style={imageStyle} />
        <p>Microwaves</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GX812-175x175.jpg" onClick={Getslush} alt="Fairs" style={imageStyle} />
        <p>Panini / Contact Grills</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/images/categories/roller-grill-category-175x175.jpg" onClick={getbar} alt="Fairs" style={imageStyle} />
        <p>Roller Grills</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/TC2-175x175.jpg" onClick={getmilshake} alt="Fairs" style={imageStyle} />
        <p>Food Warming</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/HD105-175x175.jpg" onClick={Getespress} alt="Fairs" style={imageStyle} />
        <p>Hotdog Warmers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa//RTR120-175x175.jpg" onClick={Getfilter} alt="Fairs" style={imageStyle} />
        <p>Heated Merchandisers / Displays</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EMO3K5S-175x175.jpg" onClick={Getcoffee} alt="Fairs" style={imageStyle} />
        <p>Induction Cookers</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BN1-175x175.jpg" onClick={Getpercol} alt="Fairs" style={imageStyle} />
        <p>Table Top Bains Marie & Hotpots</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SB6000--175x175.jpg" onClick={Getwater} alt="Fairs" style={imageStyle} />
        <p>Soup Kettles</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/rice-cooker-175x175.jpg" onClick={getchoco} alt="Fairs" style={imageStyle} />
        <p>Rice Cookers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EB-450-175x175.jpg" onClick={getcup} alt="Fairs" style={imageStyle} />
        <p>Salamanders</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ETS6A-175x175.jpg" onClick={GetGlass} alt="Fairs" style={imageStyle} />
        <p>Toasters</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/YBWA10-175x175.jpg" onClick={Getunderdish} alt="Fairs" style={imageStyle} />
        <p>Pressure Cookers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SV100-175x175.jpg" onClick={Getpassthrough} alt="Fairs" style={imageStyle} />
        <p>Sous Vide & Slow Cookers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/WM2-175x175.jpg" onClick={Getdishwash} alt="Fairs" style={imageStyle} />
        <p>Waffle Makers</p>
      </div>

      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BST001-175x175.jpg" onClick={Getcuttlery} alt="Fairs" style={imageStyle} />
        <p>Knife Sterilisers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/EGG-175x175.jpg" onClick={getshower} alt="Fairs" style={imageStyle} />
        <p>Egg Boilers</p>
      </div>
      <div style={containerStyle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/PC02-175x175.jpg" onClick={getracks} alt="Fairs" style={imageStyle} />
        <p>Popcorn Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcandy}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ECF520C-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Candy Floss Machines</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getinsect}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GC216-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Insect Killers</p>
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
export default Appliances;