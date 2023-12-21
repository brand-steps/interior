import React, { useEffect, useState } from 'react';
import './navbar.css';
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
const Navbars = () => {
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

  const LoginForm = async () => {
    if (!email || !password) {
      console.log('Value is not Given');
      alert("Please enter Missing Fields")
      return
    }
    // https://glorious-hat-bat.cyclic.app      // old url
    else {
      try {
        let response = await axios.post(`http://localhost:8000/listerlogin`, {
          email: email,
          password: password
        }, {
          withCredentials: true
        })
          console.log("login successful");
          alert("login successfull")

      } catch (error) {
        console.log(error)
        setErrorMessage('Invalid Email or Password'); 
      }
    }
  };
  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await axios.get(
          `http://localhost:8000/api/v1/listerprofile`,
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

      {customeruser ? (<>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item onMouseEnter={() =>{setcustomerbring(customerresponse.firstname);}} href={`/listdisplay/${customerresponse.firstname}`}>Your Listings</Dropdown.Item>
          <Dropdown.Item href='/Addlisting'>Add Listings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        </>) : <>
        <button style={buttonStyle} onClick={handleDialogOpen} className='rounded-2xl text-xl border-4 border-t-violet-500 border-e-teal-700 border-s-amber-500 border-b-red-500'>Sell</button>
        <Dialog open={openDialog} onClose={handleDialogClose}  >
        <DialogTitle>Sign in to our platform</DialogTitle>
        <DialogContent>
          <DialogContentText>
    <div className="space-y-6">
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" onChange={(event) => { setemail(event.target.value); }} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" onChange={(event) => { setPassword(event.target.value); }} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
        </div>
  {/*     <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
  */}
        <button type="submit" onClick={() => {LoginForm(); setlogin(true); handleDialogClose(); window.location.reload(false);}} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </div>

          </DialogContentText>
        </DialogContent>

      </Dialog>
        </>}

        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active className='text-lg divhead'> 
          Home
        </Navbar.Link>
        <Navbar.Link href="/listings" className='text-lg divhead'> Listings</Navbar.Link>
        <Navbar.Link href="#" className='text-lg divhead'> Services</Navbar.Link>
        <Navbar.Link href="/pricing" className='text-lg divhead'> Pricing</Navbar.Link>
        <Navbar.Link href="/contact" className='text-lg divhead'> Contact</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>


    
    </div>
  )
}

export default Navbars