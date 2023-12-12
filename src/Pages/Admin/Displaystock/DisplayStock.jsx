import React, { useEffect } from 'react';
import './displaystock.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const DisplayStock = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);
    const divStyle = {
        backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
        /* Other styles you might want to apply */
      };
    
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',

        width: '300px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    
      const imageStyle = {
        width: '250px',
        height: '200px',
        marginBottom: '16px',
      };
    
      const buttonStyle = {
        background: 'black',
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        marginTop: '12px',
        cursor: 'pointer',
        width: '80px'
      };
      const buttonStyle2 = {
        background: 'red',
        color: 'black',
        fontWeight: 'bold',
        padding: '8px 16px',
        marginTop: '12px',
        cursor: 'pointer',
      };
      const getAllProducts = async () => {
        try {
          const response = await axios.get(`https://drab-tan-sheep-fez.cyclic.app/stocksdisplayall`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all requests", error);
        }
      };
      const deleteData = async (id)=>{
        try {
          const response = await axios.delete(`https://drab-tan-sheep-fez.cyclic.app/stockdel/${id}`)
          console.log("response: ", response.data);
          setdelete(!Delete)
        } catch (error) {
          console.log("error in deleting all requests", error);
        }
        alert("Product deleted");
      };
      
  const approveData = async (id)=>{
    try {
      const response = await axios.get(`https://drab-tan-sheep-fez.cyclic.app/soldmark/${id}`)
      console.log("response: ", response.data);
    } catch (error) {
      console.log("error in approving all requests", error);
    }
    alert("Product set as sold");
  };
      useEffect(() => {
        console.log('asdasd')
        getAllProducts()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean ])
  return (
        <>
        <button style={buttonStyle2} onClick={()=>{navigate(`/addstocks`, { replace: true }) }} className='inline-block'>Add Stock</button>

        <div className='flex  justify-evenly flex-wrap my-4'>
        
          {products.map((value) => (
      <div style={containerStyle}>
      <Card
      className="max-w-sm"
    >
        <img src={value.imageUrl1} alt="img" style={imageStyle}/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
      {value.carname}
      </h5>
      <p className="font-normal text-gray-700 ">
       Make: {value.make} , Model: {value.model}, Color: {value.color}  <br/>
        <button style={buttonStyle} onClick={()=>{navigate(`/detailstock/${value._id}`, { replace: true }) }} className='inline-block'>View</button>
        <button style={buttonStyle} onClick={()=>{navigate(`/editstock/${value._id}`, { replace: true }) }} className='inline-block'>Edit</button>
      <button style={buttonStyle} onClick={()=>{deleteData(value._id)}} className='inline-block'>Delete</button>
      <button style={buttonStyle} onClick={()=>{approveData(value._id)}} className='inline-block'>Sold</button>

      </p>
    </Card>
    
      </div>
          ))}

    

      
    </div>

        </>

  );
}

export default DisplayStock;
