import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import AdminNAvbar from '../../../Components/Header/Adminnavbar/AdminNavbar';

const AllListingDisplay = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [activatebool, setactivatebool] = useState(false);
  const [deactivatebool, setdeactivatebool] = useState(false);

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
          const response = await axios.get(`https://quaint-pocketbook-bat.cyclic.app/listdisplay`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all requests", error);
        }
      };
      const deleteData = async (id)=>{
        try {
          const response = await axios.delete(`https://quaint-pocketbook-bat.cyclic.app/deletelist/${id}`)
          console.log("response: ", response.data);
          setdelete(!Delete)
        } catch (error) {
          console.log("error in deleting all requests", error);
        }
        alert("Listing deleted");
      };
      
  const activateData = async (id)=>{
    try {
      const response = await axios.get(`https://quaint-pocketbook-bat.cyclic.app/activatelisting/${id}`)
      console.log("response: ", response.data);
      setactivatebool(true)
      alert("Listing is now Active");

    } catch (error) {
      console.log("error in approving all requests", error);
    }
  };
  const deactivateData = async (id)=>{
    try {
      const response = await axios.get(`https://quaint-pocketbook-bat.cyclic.app/deactivatelisting/${id}`)
      console.log("response: ", response.data);
      setdeactivatebool(true)
      alert("Listing is now Deactivated");

    } catch (error) {
      console.log("error in approving all requests", error);
    }
  };
      useEffect(() => {
        console.log('asdasd')
        getAllProducts()
        setactivatebool(false)
        setdeactivatebool(false)
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean, activatebool, deactivatebool ])
  return (
        <>
        <AdminNAvbar/>
        <div className='flex  justify-evenly flex-wrap my-4'>

          {products.map((value) => (
      <div style={containerStyle}>
      <Card
      className="max-w-sm"
    >
        <img src={value.imageUrl1} alt="img" style={imageStyle}/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
      {value.productname}
      </h5>
      <p className="font-normal text-gray-700 ">
       <span className='font-bold'> Owner: </span>{value.listername} , <span className='font-bold'>Price: </span>{value.price}, <span className='font-bold'>Location: </span>{value.location} 
       <span className='font-bold'>Status: </span> {value.Deactive === false ? (<>
       <span className='text-green-500'>Active</span>
       </>): <>
       <span className='text-red-500'>DeActive</span>
       </>}
 <br/>
        <button style={buttonStyle} onClick={()=>{navigate(`/listdetails/${value._id}`, { replace: true }) }} className='inline-block'>View</button>
        <button style={buttonStyle} onClick={()=>{navigate(`/editlisting/${value._id}`, { replace: true }) }} className='inline-block'>Edit</button>
      <button style={buttonStyle} onClick={()=>{deleteData(value._id)}} className='inline-block'>Delete</button>
      <button style={buttonStyle} onClick={()=>{activateData(value._id)}} className='inline-block'>Activate</button>
      <button style={buttonStyle} onClick={()=>{deactivateData(value._id)}} className='inline-block'>Deactive</button>

      </p>
    </Card>
    
      </div>
          ))}

    

      
    </div>

        </>

  );
}

export default AllListingDisplay;
