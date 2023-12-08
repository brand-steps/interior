import React, { useEffect, useState } from 'react';
import './detailstock.css';
import img1 from '../../../Assests/details1.jpg'
import Navbar2 from '../../../Components/Header/Navbar2';
import { Table } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import Footer2 from '../../../Components/Footer/Footer2';
import StockSlider from '../../../Components/Body/Stockcomponents/stockSlider/StockSlider';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const DetailStock = () => {
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);

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

  const fetchSingleProduct = async() => {
    const response = await axios.get(`http://localhost:8000/singlestock/${id}`);
    console.log("response: ", response);
  console.log(singleproduct);
  setsingleproduct(response.data.Product);
        }
        useEffect (()=> {
            fetchSingleProduct()
    
        },[]);
  return (
    <>
    <Navbar2/>
    <div className='flex  mx-5 flex-wrap my-6 ' >
      <div style={containerStyle} className='overflow-hidden'>
        {image1 && (<>
          <img src={singleproduct.imageUrl1} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image2 && (<>
          <img src={singleproduct.imageUrl2} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image3 && (<>
          <img src={singleproduct.imageUrl3} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image4 && (<>
          <img src={singleproduct.imageUrl4} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image5 && (<>
          <img src={singleproduct.imageUrl5} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}
        {image6 && (<>
          <img src={singleproduct.imageUrl6} alt="carimg" className='img1size hover:scale-125 transition duration-500 cursor-pointer object-cover' />

        </>)}

        <div className='flex  mx-5 flex-wrap ' >
      <div style={containerStyle3}>
       <span> 
        <span onClick={() => {setimage1(true); setimage2(false); setimage3(false); setimage4(false); setimage5(false); setimage6(false)}}> <img src={singleproduct.imageUrl1} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(true); setimage3(false); setimage4(false); setimage5(false); setimage6(false)}}><img src={singleproduct.imageUrl2} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(true); setimage4(false); setimage5(false); setimage6(false)}}> <img src={singleproduct.imageUrl3} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(true); setimage5(false); setimage6(false)}}> <img src={singleproduct.imageUrl4} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(false); setimage5(true); setimage6(false)}}>   <img src={singleproduct.imageUrl5} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>
       <span onClick={() => {setimage1(false); setimage2(false); setimage3(false); setimage4(false); setimage5(false); setimage6(true)}}><img src={singleproduct.imageUrl6} alt="carimg" style={imageStyle2} className='inline ml-2'/></span>

      </span>

      </div>
      </div>
      </div>
      
      <div style={containerStyle2} className='ml-2'>
        <h1 className='text-4xl font-bold' style={txtclr}>{singleproduct.carname}</h1>
        <p className='text-lg mt-3 uppercase'>{singleproduct.model}</p>
        <div className='ml-5 mt-4 text-right'>
        <span className=' text-xl font-bold  ' style={txtclr}>Our Price:</span> 
        <span className='ml-2 '>{singleproduct.price}</span> 
        
      </div>

      <div className="overflow-x-auto mt-5">
      <Table className='bg-black '>

        <Table.Body className="divide-y">
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Make
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.make}</Table.Cell>
 
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Model
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.model}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Year
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.year}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>Mileage</Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.milage}</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Fuel Type
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.fueltype}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>Colour</Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.color}</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Gearbox
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.gearbox}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Doors
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.door}</Table.Cell>
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
            <h1 className='text-3xl text-bold mb-10 uppercase' style={txtclr}> {singleproduct.carname}</h1>
          <p className="mb-2 text-white ">
          {singleproduct.description}
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
            Make
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.make}</Table.Cell>
 
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Model
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.model}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>Body</Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.bodys}</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Milage
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.milage}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>Year</Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.year}</Table.Cell>
  
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold  " style={txtclr}>
            Color
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.color}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Fuel Type
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.fueltype}</Table.Cell>
          </Table.Row>


          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Gearbox
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.gearbox}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Door
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.door}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Engine Type
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.enginetype}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Engine Size
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.enginesize}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            MPG
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.mpg}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Height
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.height}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Length
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.length}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Width
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.width}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Co2 Emission
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.co2emission}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Led Lights
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.ledlight}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Navigation System
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.navigation}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Cooling Seats
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.coolingseats}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Sound System
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.soundsystem}</Table.Cell>
          </Table.Row>


          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            AirBags
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.airbags}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Back Camera
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.backcamera}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Parking Camera
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.parkingcamera}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Traction
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.traction}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Anti-Lock Brakes
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.antilockbreaks}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Air Condition
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.aircondition}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Climate Control
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.climatecontrol}</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold " style={txtclr}>
            Sunroof
            </Table.Cell>
            <Table.Cell className='text-white'>{singleproduct.sunroof}</Table.Cell>
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
            <Table.Cell className='text-white'>{singleproduct.installmentmonths}</Table.Cell>
 
     
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

export default DetailStock;
