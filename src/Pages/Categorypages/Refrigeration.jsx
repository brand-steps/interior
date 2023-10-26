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
    
    const [Subcategory , SetSubcategory] = useState("Beer Fridges");
    const [BackBar , SetBackBar] = useState("Back Bar Refrigerators");
    const [minifridge , Setminifridge] = useState("Mini Fridges");
    const [Bottle , SetBottle] = useState("Bottle Coolers");
    const [wine , Setwine] = useState("Wine Coolers");
    const [undercounter , Setundercounter] = useState("Undercounter Fridges");
    const [glassdoor , Setglassdoor] = useState("Glass Door Fridges");
    const [underfreez , Setunderfreez] = useState("Undercounter Freezers");
    const [Icemaker , SetIcemaker] = useState("Ice Makers");
    const [uprightfri , Setuprightfri] = useState("Upright Fridges");
    const [uprightfre , Setuprightfre] = useState("Upright Freezers");
    const [chestfre , Setchestfre] = useState("Chest Freezers");
    const [refdis , Setrefdis] = useState("Refrigerated Displays & Merchandisers");
    const [cakecoun , Setcakecoun] = useState("Cake Counters & Patisserie Showcases");
    const [serveover , Setserveover] = useState("Serve Over Counters & Deli Display Refrigerators");
    const [counterfri , Setcounterfri] = useState("Counter Fridges");
    const [dryagi , Setdryagi] = useState("Dry Aging Refrigerators");
    const [lowref , Setlowref] = useState("Low Refrigerated Counters Chef Bases");
    const [counterfre , Setcounterfre] = useState("Counter Freezers");
    const [pizzatab , Setpizzatab] = useState("Refrigerated Pizza Tables");
        const [salad , Setsalad] = useState("Salad & Sandwitch Preparation Counters");
    const [Saladettes , SetSaladettes] = useState("Saladettes");
    const [displayref , Setdisplayref] = useState("Display Refrigerated Counters");
    const [bakery , Setbakery] = useState("Bakery Refrigeration");
    const [preptops , Setpreptops] = useState("Refrigerated Prep Tops");
    const [sushi , Setsushi] = useState("Sushi & Tapas Display Showcases");   
     const [multi , Setmulti] = useState("Multi Deck Displays & Refrigerated Wall Cabinets");
     const [supers , Setsupers] = useState("Supermarket Refrigerators");
    const [balst , Setbalst] = useState("Blast Chillers & Flash Freezers");
    const [coldroom , Setcoldroom] = useState("Cold Rooms & Freezer Rooms");
    const [dis , Setdis] = useState("Display Refrigeration");

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
const Getsubcat = () => {
  navigate(`/Subcategorypage/${Subcategory}`)
}
const Getbackbar = () => {
  navigate(`/Subcategorypage/${BackBar}`)
}
const Getminifridge = () => {
  navigate(`/Subcategorypage/${minifridge}`)
}
const Getbottle = () => {
  navigate(`/Subcategorypage/${Bottle}`)
}
const Getwine = () => {
  navigate(`/Subcategorypage/${wine}`)
}
const getUndercounter = () => {
  navigate(`/Subcategorypage/${undercounter}`)
}
const getglass = () => {
  navigate(`/Subcategorypage/${glassdoor}`)
}
const getUnderfreez = () => {
  navigate(`/Subcategorypage/${underfreez}`)
}
const getIcemaker = () => {
  navigate(`/Subcategorypage/${Icemaker}`)
}
const getuprightfri = () => {
  navigate(`/Subcategorypage/${uprightfri}`)
}
const getuprightfre = () => {
  navigate(`/Subcategorypage/${uprightfre}`)
}
const getchestfre = () => {
  navigate(`/Subcategorypage/${chestfre}`)
}
const getrefdis = () => {
  navigate(`/Subcategorypage/${refdis}`)
}
const getcakecoun = () => {
  navigate(`/Subcategorypage/${cakecoun}`)
}
const getserveover = () => {
  navigate(`/Subcategorypage/${serveover}`)
}
const getcounterfri = () => {
  navigate(`/Subcategorypage/${counterfri}`)
}
const getdryagi = () => {
  navigate(`/Subcategorypage/${dryagi}`)
}

const getlowref = () => {
  navigate(`/Subcategorypage/${lowref}`)
}
const getcounterfre = () => {
  navigate(`/Subcategorypage/${counterfre}`)
}
const getpizzatab = () => {
  navigate(`/Subcategorypage/${pizzatab}`)
}
const getsalad = () => {
  navigate(`/Subcategorypage/${salad}`)
}
const getSaladettes = () => {
  navigate(`/Subcategorypage/${Saladettes}`)
}
const getdisplayref = () => {
  navigate(`/Subcategorypage/${displayref}`)
}
const getbakery = () => {
  navigate(`/Subcategorypage/${bakery}`)
}
const getpreptops = () => {
  navigate(`/Subcategorypage/${preptops}`)
}
const getsushi = () => {
  navigate(`/Subcategorypage/${sushi}`)
}
const getmulti = () => {
  navigate(`/Subcategorypage/${multi}`)
}
const getsupers = () => {
  navigate(`/Subcategorypage/${supers}`)
}
const getbalst = () => {
  navigate(`/Subcategorypage/${balst}`)
}
const getcoldroom = () => {
  navigate(`/Subcategorypage/${coldroom}`)
}

const getdis = () => {
  navigate(`/Subcategorypage/${dis}`)
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

        <div style={containerStyle} className="subhovers" onClick={Getsubcat}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BCD90-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Beer Fridges</p>
      </div>

      <div style={containerStyle} onClick={Getbackbar} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BSS230H-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Back Bar Refrigerators</p>
      </div>
      <div style={containerStyle} onClick={Getminifridge} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BC46-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Mini Fridges</p>
      </div>
      <div style={containerStyle} onClick={Getbottle} className="subhovers">
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/LG-332BF-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bottle Coolers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={Getwine}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SN188-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Wine Coolers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getUndercounter}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SR20S-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Undercounter Fridges</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getglass}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/AGN650TNG-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Glass Door Fridges</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getUnderfreez}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SF200G-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Undercounter Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getIcemaker}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/ZB50-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Ice Makers</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={getuprightfri}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SR60VS-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Upright Fridges</p>
      </div>

      <div style={containerStyle} className="subhovers"onClick={getuprightfre}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GN1410TN--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Upright Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getchestfre}>
        <img src="https://adexa.co.uk/image/cache/catalog/images/categories/chest-freezers-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Chest Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getrefdis}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/RTW120-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Refrigerated Displays & Merchandisers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcakecoun}>
        <img src="https://adexa.co.uk/image/cache/catalog/GGM/CS-1000ER2-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Cake Counters & Patisserie Showcases</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getserveover}>
        <img src="https://adexa.co.uk/image/cache/catalog/Coreco/CVED-10-20-R--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Serve Over Counters & Deli Display Refrigerators</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcounterfri}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GN3160TN-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Counter Fridges</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getdryagi}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/SW415N-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Dry Aging Refrigerators</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getlowref}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/H1800-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Low Refrigerated Counters Chef Bases</p>
      </div>

      <div style={containerStyle} className="subhovers" onClick={getcounterfre}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GN3100BT--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Counter Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getpizzatab}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/PZ3600-VRX-castors-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Refrigerated Pizza Tables</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getsalad}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/PS200-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Salad & Sandwitch Preparation Counters</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getSaladettes}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/S900-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Saladettes</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getdisplayref}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/THSAI188-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Display Refrigerated Counters</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbakery}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/GN3100BT--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Bakery Refrigeration</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getpreptops}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/VRX-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Refrigerated Prep Tops</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getsushi}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/RTS132--175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Sushi & Tapas Display Showcases</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getmulti}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BLF-10-13-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Multi Deck Displays & Refrigerated Wall Cabinets</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getsupers}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/VFCIF250-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Supermarket Refrigerators</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getbalst}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/BCF40-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Blast Chillers & Flash Freezers</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getcoldroom}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/Cold-Room-01-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Cold Rooms & Freezer Rooms</p>
      </div>
      <div style={containerStyle} className="subhovers" onClick={getdis}>
        <img src="https://adexa.co.uk/image/cache/catalog/Adexa/STP1310-175x175.jpg" alt="Fairs" style={imageStyle} />
        <p>Display Refrigeration</p>
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
export default Refrigration;