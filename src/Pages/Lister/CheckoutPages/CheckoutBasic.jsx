import React from 'react'
import Navbars from '../../../Components/Header/Navbar/Navbar'
import Footers from '../../../Components/Footer/Footers'
import { useEffect } from 'react'
import easy from '../../../Assets/easypaisa.png'
import jazz from '../../../Assets/jazzcash.png'

import { Table } from 'flowbite-react';
import { useParams } from 'react-router-dom'
const CheckoutBasic = () => {

    const divStyle = {
        /*         backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
 Other styles you might want to apply */
      };
    const {price} = useParams();
    var totalprice = Number(price) + ((price/100)*5)
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '600px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    
      const containerStyle2 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '300px', // Adjust the width as needed
        //justifyContent: 'center', background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
      const imageStyle = {
        width: '580px',
        height: '100px',
        marginBottom: '16px',
      };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

   <>
   <Navbars/>
   <div className='flex  justify-evenly flex-wrap my-10' style={divStyle}>
      <div style={containerStyle}>
      <h1 className='text-3xl text-center mb-6'> <span className='font-bold '> CHECKOUT </span></h1>
      <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell className='text-base font-bold'>Plan </Table.HeadCell>

          <Table.HeadCell className='text-base font-bold'>Price</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white">
            <Table.Cell className="whitespace-nowrap font-medium text-sm text-gray-900 ">
              Your Plan
            </Table.Cell>
 
            <Table.Cell>Rs. {price}</Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
              Sales tax (5%)
            </Table.Cell>

            <Table.Cell>Rs. {(price / 100)*5}</Table.Cell>

          </Table.Row>

          <Table.Row className="bg-white">
            <Table.Cell className="whitespace-nowrap font-bold text-lg text-gray-900 ">Total</Table.Cell>

            <Table.Cell className='text-base font-bold'>Rs. <span className='font-bold'> {totalprice} </span></Table.Cell>

          </Table.Row>
        </Table.Body>
      </Table>
    </div>
        {/*}
      <h1 className='text-3xl text-center'> <span className='font-bold '> Payment Details </span></h1>
       {/* <img src={logo} alt="Fairs" style={imageStyle} /> 
       <span className='inline w-full bg-red-500'> <span className=' text-xl mt-12  font-bold'> Price: </span>
       <img src="https://www.pngmart.com/files/23/Black-Line-PNG-HD.png" alt="Fairs" style={imageStyle2} className='inline mt-2' />
        <span className=' text-right '>Rs. 1000</span></span>
        <h1 className='text-xl'> <span className='font-bold'> Sales Tax: </span> 200</h1>
        <img src="https://www.pngmart.com/files/23/Black-Line-PNG-HD.png" alt="Fairs" style={imageStyle} />

        <hr className=''/>

        <p></p>
        */}
      </div>
  
    </div>
    <div className='flex  justify-evenly flex-wrap mb-6' style={divStyle}>
      
      <div style={containerStyle2}>
        <img src={easy} alt="Fairs" style={imageStyle} />
        <h1 className='mb-6'><span className='font-bold'>Number: </span>+92 343 0212412</h1>
        <p>Pay conveniently with <span className=''> EasyPaisa </span></p> <p className='mt-2'> <span className='font-bold '> <a href="https://wa.me/+923430212412" target='_blank'> send a screenshot on <span className='text-blue-500 underline'> WhatsApp</span> </a> </span></p>
{/*}
        <p>Pay conveniently with <span className='font-bold'> EasyPaisa </span>and send a screenshot via <a href="https://wa.me/+923430212412"> <span className='font-bold text-blue-500'> WhatsApp</span> </a> on the same number</p>
      */}
        </div>
      <div style={containerStyle2}>
        <img src={jazz} alt="Fairs" style={imageStyle} />
        <h1 className='mb-6'><span className='font-bold'>Number: </span>+92 343 0212412</h1>
        <p>Pay conveniently with <span className=''> JazzCash </span></p> <p className='mt-2'> <span className='font-bold'> <a href="https://wa.me/+923430212412" target='_blank'> send a screenshot on <span className='text-blue-500 underline'> WhatsApp</span> </a> </span></p>
      </div>
    </div>
   <Footers/>
   </>

  )
}

export default CheckoutBasic