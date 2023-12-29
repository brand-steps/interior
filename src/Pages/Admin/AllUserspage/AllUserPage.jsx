import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Card, Dropdown } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import AdminNAvbar from '../../../Components/Header/Adminnavbar/AdminNavbar';

const AllUserPage = () => {
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
      const getAllUsers = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/userdisplay`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all requests", error);
        }
      };
      const deleteData = async (id)=>{
        try {
          const response = await axios.delete(`http://localhost:8000/deletelisteruser/${id}`)
          console.log("response: ", response.data);
          setdelete(!Delete)
        } catch (error) {
          console.log("error in deleting all requests", error);
        }
        alert("User deleted");
      };
      
  const activateData = async (id)=>{
    try {
      const response = await axios.get(`http://localhost:8000/activatelisting/${id}`)
      console.log("response: ", response.data);
      setactivatebool(true)
      alert("Listing is now Active");

    } catch (error) {
      console.log("error in approving all requests", error);
    }
  };

      useEffect(() => {
        console.log('asdasd')
        getAllUsers()

        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean, ])
  return (
        <>
        <AdminNAvbar/>
        <div className='flex  justify-evenly flex-wrap my-4'>

          {products.map((value) => (
      <div style={containerStyle}>
      <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
        <Dropdown.Item>
            <a
              onClick={() => {navigate(`/userlistview/${value._id}`)}}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              View
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              onClick={() => {navigate(`/edituserlister/${value._id}`)}}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              onClick={()=>{deleteData(value._id)}}
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-q04ey7wo.png"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">{value.firstname}</h5>
        <span className="text-lg text-gray-500 dark:text-gray-400"><span className='font-bold'> Phone: </span>{value.phone}</span>
        <span className="text-lg text-gray-500 dark:text-gray-400"><span className='font-bold'>Email: </span>{value.email}</span>
        <span className="text-lg text-gray-500 dark:text-gray-400"><span className='font-bold'>City: </span>{value.city}</span>
        <span className="text-lg text-gray-500 dark:text-gray-400"><span className='font-bold'>Address: </span>{value.address}</span>
        <span className="text-lg text-gray-500 dark:text-gray-400"><span className='font-bold'>Password: </span>{value.password}</span>

      </div>
    </Card>
      </div>
      
          ))}

    

      
    </div>

        </>

  );
}

export default AllUserPage;
