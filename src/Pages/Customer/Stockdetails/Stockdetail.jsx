import React, { useState } from 'react';
import './stockdetail.css';
import img1 from '../../../Assests/details1.jpg'
import Navbar2 from '../../../Components/Header/Navbar2';
import { Table } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import Footer2 from '../../../Components/Footer/Footer2';
import StockSlider from '../../../Components/Body/Stockcomponents/stockSlider/StockSlider';


const Stockdetail = () => {

const [image1 , setimage1] = useState(true);
const [image2 , setimage2] = useState(false);
const [image3 , setimage3] = useState(false);
const [image4 , setimage4] = useState(false);
const [image5 , setimage5] = useState(false);
const [image6 , setimage6] = useState(false);

  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',

    width: '800px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',

    width: '500px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle3 = {
    display: 'flex',
    flexDirection: 'column',

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const imageStyle = {
    width: '790px',
    height: '450px',
    marginBottom: '16px',
  };
  const imageStyle2 = {
    width: '110px',
    height: '100px',
    marginBottom: '16px',
  };
  const buttonStyle = {
    //background: '#62CE0E',
    background: '#E5A317',
    color: 'black',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };
  const txtclr = {
    color: '#E5A317',

  };

  return (
    <>
    <Navbar2/>
    <div className='flex  mx-5 flex-wrap my-6 ' >
      <div style={containerStyle} className='overflow-hidden'>
        {image1 && (<>
          <img src={img1} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image2 && (<>
          <img src="https://smgmedia.blob.core.windows.net/images/129726/800/toyota-alphard-mpv-petrol-6db799573115.jpg" alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image3 && (<>
          <img src="https://smgmedia.blob.core.windows.net/images/129726/800/lamborghini-urus-estate-petrol-f32416926ddf.jpg" alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image4 && (<>
          <img src="https://smgmedia.blob.core.windows.net/images/129726/800/toyota-vellfire-mpv-petrol-ff52f12d284d.jpg" alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image5 && (<>
          <img src="https://smgmedia.blob.core.windows.net/images/129726/800/mercedes-e63-s-amg-saloon-petrol-db1f10d75c12.jpg" alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image6 && (<>
          <img src="https://smgmedia.blob.core.windows.net/images/129726/800/lamborghini-urus-estate-petrol-f32416926ddf.jpg" alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}

        <div className='flex  mx-5 flex-wrap ' >
      <div style={containerStyle3}>
       <span> 
        <span onClick={() => {setimage1(true); setimage2(false); setimage3(false); setimage4(false); setimage5(false); setimage6(false)}}> <img src={img1} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(true); setimage3(false); setimage4(false); setimage5(false); setimage6(false)}}><img src="https://smgmedia.blob.core.windows.net/images/129726/800/toyota-alphard-mpv-petrol-6db799573115.jpg" alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(true); setimage4(false); setimage5(false); setimage6(false)}}> <img src="https://smgmedia.blob.core.windows.net/images/129726/800/lamborghini-urus-estate-petrol-f32416926ddf.jpg" alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(true); setimage5(false); setimage6(false)}}> <img src="https://smgmedia.blob.core.windows.net/images/129726/800/toyota-vellfire-mpv-petrol-ff52f12d284d.jpg" alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(false); setimage5(true); setimage6(false)}}>   <img src="https://smgmedia.blob.core.windows.net/images/129726/800/mercedes-e63-s-amg-saloon-petrol-db1f10d75c12.jpg" alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(false); setimage5(false); setimage6(true)}}><img src="https://smgmedia.blob.core.windows.net/images/129726/800/lamborghini-urus-estate-petrol-f32416926ddf.jpg" alt="carimg" style={imageStyle2} className='inline ml-2'/></span>

      </span>

      </div>
      </div>
      </div>
      
      <div style={containerStyle2} className='ml-2'>
        <h1 className='text-4xl font-bold' style={txtclr}>Toyota Land Cruiser</h1>
        <p className='text-lg mt-3 uppercase'>3.5 V6 TWIN TURBO ZX AWD</p>
        <div className='ml-5 mt-4 text-right'>
        <span className=' text-xl font-bold  ' style={txtclr}>Our Price:</span> 
        <span className='ml-2 '>£109,995</span> 
        
      </div>

      <div className="overflow-x-auto mt-5">
      <Table className='bg-black '>

        <Table.Body className="divide-y">
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Make
            </Table.Cell>
            <Table.Cell className='text-white'>Hyundai</Table.Cell>
 
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Model
            </Table.Cell>
            <Table.Cell className='text-white'>ii3</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Year
            </Table.Cell>
            <Table.Cell className='text-white'>2023</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>Mileage</Table.Cell>
            <Table.Cell className='text-white'>37,447</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Fuel Type
            </Table.Cell>
            <Table.Cell className='text-white'>Petrol</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>Colour</Table.Cell>
            <Table.Cell className='text-white'>Black</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Gearbox
            </Table.Cell>
            <Table.Cell className='text-white'>Manual</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Doors
            </Table.Cell>
            <Table.Cell className='text-white'>5</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

    <button className='btnstyle'>
    <img src="https://static.vecteezy.com/system/resources/previews/011/459/577/original/black-circle-chat-or-message-icon-free-png.png" className="mr-3 inline h-7 " alt="Flowbite React Logo" />
      Vehicle Enquiry</button>
      </div>

    </div>
    
    <Accordion className='bg-black'>
      <Accordion.Panel>
        <Accordion.Title>Vehicle Description</Accordion.Title>
        <Accordion.Content>
            <h1 className='text-3xl text-bold mb-10 uppercase' style={txtclr}> Toyota Land Cruiser</h1>
          <p className="mb-2 text-white ">
          2023 (23) TOYOTA LAND CRUISER ZX - 3.0 V6 TURBO PETROL AUTOMATIC - *FULLY LOADED EVERY OPTIONAL EXTRA 
          FROM NEW* - 900 MILES - SUNROOF - MODELLISTA BODYKIT - BEIGE LEATHER INTERIOR - PEARLESCENT WHITE PAINTWORK -
           RADAR CRUISE CONTROL - SLIDING SUNROOF - REAR ENTERTAINMENT - COOL BOX - MULTI FUNCTIONAL HEATED STEERING 
           WHEEL - LANE KEEPING ASSIST - BLIND SPOT ASSIST - LANE CHANGE WARNING - FRONT AND REAR HEATED AND COOLED SEATS
            - DUAL CLIMATE CONTROL - ELECTRIC MEMORY SEATS - REAR ROW ELECTRIC FOLDING SEATS - ELECTRIC TAILGATE - 
            JBL SURROUND SOUND SYSTEM - ELECTRIC MIRRORS - AUTO HOLD - MODE SELECT - 360 CAMERAS - HEADS UP DISPLAY - 
            AUTO LIGHTS - PRE CRASH SAFETY SYSTEM - 20 INCH ALLOY WHEELS - *PLUS SO MUCH MORE TO THIS VEHICLE!* - 
            DELIVERY AVAILABLE NATIONWIDE AT AN EXTRA COST - HERE AT JAPANESE MPV SPECIALIST WE ARE DELIGHTED TO OFFER 
            THIS MAGNIFICENT EXAMPLE OF A VEHICLE - IF YOU HAVE ANY QUESTIONS OR WANT TO SIMPLY BOOK A VIEWING, PLEASE 
            KINDLY VIEW THE CONTACT PAGE ON OUR WEBSITE. 
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Vehicle Features</Accordion.Title>
        <Accordion.Content>
        <div className="overflow-x-auto mt-5">
      <Table className='bg-black '>

        <Table.Body className="divide-y">
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Year
            </Table.Cell>
            <Table.Cell className='text-white'>2023</Table.Cell>
 
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Odometer
            </Table.Cell>
            <Table.Cell className='text-white'>900 miles</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>Transmission</Table.Cell>
            <Table.Cell className='text-white'>Automatic</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Fuel Type
            </Table.Cell>
            <Table.Cell className='text-white'>Petrol</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>Colour</Table.Cell>
            <Table.Cell className='text-white'>Black</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Doors
            </Table.Cell>
            <Table.Cell className='text-white'>4 Doors</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Engine Size
            </Table.Cell>
            <Table.Cell className='text-white'>3.0L</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Vehicle Finance</Accordion.Title>
        <Accordion.Content>
        <div className="overflow-x-auto mt-5">
      <Table >

        <Table.Body className="divide-y">
          <Table.Row className=" bg-slate-950">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Term
            </Table.Cell>
            <Table.Cell className='text-white'>12 Months</Table.Cell>
 
     
          </Table.Row>
          <Table.Row className="bg-slate-900 ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            First Payment
            </Table.Cell>
            <Table.Cell className='text-white'>£2,234.00</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-slate-950 ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>Monthly Payments</Table.Cell>
            <Table.Cell className='text-white'>£2,234.00</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className="bg-slate-900 ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Cash Price
            </Table.Cell>
            <Table.Cell className='text-white'>£109,995.00</Table.Cell>
          </Table.Row>
          <Table.Row className=" bg-slate-950">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>Cash Deposit</Table.Cell>
            <Table.Cell className='text-white'>£2,234.00</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" bg-slate-900">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Total Deposit
            </Table.Cell>
            <Table.Cell className='text-white'>£2,234.00</Table.Cell>
          </Table.Row>
          <Table.Row className=" bg-slate-950">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Admin Fee
            </Table.Cell>
            <Table.Cell className='text-white'>£2,234.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
         
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

    <Footer2/>
    </>
  );
}

export default Stockdetail;
