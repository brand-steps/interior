import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import AdminNAvbar from '../../../Components/Header/Adminnavbar/AdminNavbar';

const ApprovalPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [approvebool, setapprovebool] = useState(false);
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
          const response = await axios.get(`https://quaint-pocketbook-bat.cyclic.app/listdisplayfalse`);
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
        alert("Listing Disapproved");
      };
      
  const approveData = async (id)=>{
    try {
      const response = await axios.get(`https://quaint-pocketbook-bat.cyclic.app/approvelisting/${id}`)
      console.log("response: ", response.data);
      setapprovebool(true)
      alert("Listing is now Approved");

    } catch (error) {
      console.log("error in approving all requests", error);
    }
  };

      useEffect(() => {
        console.log('asdasd')
        getAllProducts()
        setapprovebool(false)
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean, approvebool ])
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
        <button style={buttonStyle} onClick={()=>{approveData(value._id)}} className='inline-block'>Approve</button>
        <button style={buttonStyle} onClick={()=>{deleteData(value._id)}} className='inline-block'>Disapprove</button>

      </p>
    </Card>
    
      </div>
          ))}

    

      
    </div>

        </>

  );
}

export default ApprovalPage;
