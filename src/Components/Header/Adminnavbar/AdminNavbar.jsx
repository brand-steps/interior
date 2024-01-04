import React, { useEffect, useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../../Assets/logo1.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LinearProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AdminNAvbar = () => {
  const [email, setemail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  let [customeruser, setcustomeruser] = useState(false);
  let [customerresponse, setcustomerresponse] = useState("");
  let [customerbring, setcustomerbring] = useState(false);

  const [login, setlogin] = useState(false)

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const buttonStyle = {
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
    padding: '8px 16px',
    marginTop: '12px',
    cursor: 'pointer',
  };


  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await axios.get(
          `https://nice-tan-bullfrog-slip.cyclic.app/api/v1/listerprofile`,
          {
            withCredentials: true,
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );

        // console.log("response: ", response);
        setcustomerresponse(response.data);
        setcustomeruser(true);
        setcustomerbring(customerresponse.firstname);


      } catch (error) {
        console.log("axios error: ", error);
      }
    };
    getProfile();
  }, []);
  return (
    <div>
      
      <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">

        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/dashboardadmin" active className='text-lg'> 
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="/listdisplayadmin" className='text-lg'> Listings</Navbar.Link>
        <Navbar.Link href="/approvelistadmin" className='text-lg'> Approval</Navbar.Link>
        <Navbar.Link href="/alluseradmin" className='text-lg'> Users</Navbar.Link>
        <Navbar.Link href="/bestsellermanage" className='text-lg'> Best Listings</Navbar.Link>
        <Navbar.Link href="/bestsellermanage" className='text-lg'> Hot Listings</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>


    
    </div>
  )
}

export default AdminNAvbar