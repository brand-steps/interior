import React from 'react';
import './stockdetail.css';
import img1 from '../../../Assests/details1.jpg'
import Navbar2 from '../../../Components/Header/Navbar2';
import { Table } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import Footer2 from '../../../Components/Footer/Footer2';

const Stockdetail = () => {



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
  const imageStyle = {
    width: '790px',
    height: '570px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#62CE0E',
    color: 'white',
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
    <div className='flex  mx-5 flex-wrap my-6' >
      <div style={containerStyle}>
        <img src={img1} alt="carimg" style={imageStyle} />
      </div>
      <div style={containerStyle2} className='ml-2'>
        <h1 className='text-4xl font-bold' style={txtclr}>Toyota Land Cruiser</h1>
        <p className='text-lg mt-3 uppercase'>3.5 V6 TWIN TURBO ZX AWD</p>
        <div className='ml-5 mt-4 '>
        <span className='ml-24 text-xl font-bold ' style={txtclr}>Our Price:</span> 
        <span className='ml-2 '>£109,995</span> 
        
      </div>

      <div className="overflow-x-auto mt-5">
      <Table className='bg-black '>

        <Table.Body className="divide-y">
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Year
            </Table.Cell>
            <Table.Cell className='text-white'>2023</Table.Cell>
 
     
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Odometer
            </Table.Cell>
            <Table.Cell className='text-white'>900 miles</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>Transmission</Table.Cell>
            <Table.Cell className='text-white'>Automatic</Table.Cell>
  
     
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
            Doors
            </Table.Cell>
            <Table.Cell className='text-white'>4 Doors</Table.Cell>
          </Table.Row>
          <Table.Row className=" ">
            <Table.Cell className="whitespace-nowrap font-bold text-white " style={txtclr}>
            Engine Size
            </Table.Cell>
            <Table.Cell className='text-white'>3.0L</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>

    <button style={buttonStyle}>Chat with us</button>
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
