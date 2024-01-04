import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import AdminNAvbar from '../../../Components/Header/Adminnavbar/AdminNavbar';

const ManageListDisplay = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [activatebestbool, setactivatebestbool] = useState(false);
  const [activatetopbool, setactivatetopbool] = useState(false);

  const [deactivatebestbool, setdeactivatebestbool] = useState(false);
  const [deactivatetopbool, setdeactivatetopbool] = useState(false);

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
          const response = await axios.get(`https://nice-tan-bullfrog-slip.cyclic.app/listdisplay`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all requests", error);
        }
      };
      const deleteData = async (id)=>{
        try {
          const response = await axios.delete(`https://nice-tan-bullfrog-slip.cyclic.app/deletelist/${id}`)
          console.log("response: ", response.data);
          setdelete(!Delete)
        } catch (error) {
          console.log("error in deleting all requests", error);
        }
        alert("Listing deleted");
      };
      
  const BestData = async (id)=>{
    try {
      const response = await axios.get(`https://nice-tan-bullfrog-slip.cyclic.app/bestlistingactive/${id}`)
      console.log("response: ", response.data);
      setactivatebestbool(true)
      alert("Listing is set as best listing");

    } catch (error) {
      console.log("error in approving all requests", error);
    }
  };
  const DisapprovebestData = async (id)=>{
    try {
      const response = await axios.get(`https://nice-tan-bullfrog-slip.cyclic.app/bestlisterdeactive/${id}`)
      console.log("response: ", response.data);
      setdeactivatebestbool(true)
      alert("Listing is now removed as best listing");

    } catch (error) {
      console.log("error in approving all requests", error);
    }
  };

  const TopData = async (id)=>{
    try {
      const response = await axios.get(`https://nice-tan-bullfrog-slip.cyclic.app/topsellingactive/${id}`)
      console.log("response: ", response.data);
      setactivatetopbool(true)
      alert("Listing is now set as top Listing");

    } catch (error) {
      console.log("error in approving all requests", error);
    }
  };
  const DisapprovetopData = async (id)=>{
    try {
      const response = await axios.get(`https://nice-tan-bullfrog-slip.cyclic.app/toplisterdeactive/${id}`)
      console.log("response: ", response.data);
      setdeactivatetopbool(true)

      alert("Listing is now removed from top listing");

    } catch (error) {
      console.log("error in approving all requests", error);
    }
  };
      useEffect(() => {
        console.log('asdasd')
        getAllProducts()
        setactivatebestbool(false);
        setdeactivatebestbool(false);
        setactivatetopbool(false);
        setdeactivatetopbool(false);
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean, activatebestbool, deactivatebestbool, activatetopbool, deactivatetopbool ])
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
        
       <p>
       <span className='font-bold'>Best Selling: </span>
       {value.bestSeller === false ? (<>
       <span className='text-red-500'>Deactive</span>
       </>): <>
       <span className='text-green-500'>Active</span>
       </>}
       </p>
       <p>
       <span className='font-bold'>Top Selling: </span>
       {value.topSeller === false ? (<>
       <span className='text-red-500'>Deactive</span>
       </>): <>
       <span className='text-green-500'>Active</span>
       </>}
       </p>
 <br/>
        <button style={buttonStyle} onClick={()=>{navigate(`/listdetails/${value._id}`, { replace: true }) }} className='inline-block'>View</button>
      <button style={buttonStyle} onClick={()=>{BestData(value._id)}} className='inline-block'>Set Best Seller</button>
      <button style={buttonStyle} onClick={()=>{DisapprovebestData(value._id)}} className='inline-block'>Remove Best Seller</button>
      <button style={buttonStyle} onClick={()=>{TopData(value._id)}} className='inline-block'>Set Top Seller</button>
      <button style={buttonStyle} onClick={()=>{DisapprovetopData(value._id)}} className='inline-block'>Remove Top Seller</button>

      </p>
    </Card>
    
      </div>
          ))}

    

      
    </div>

        </>

  );
}

export default ManageListDisplay;
