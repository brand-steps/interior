import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../../Assets/logo1.jpg'
import logomain from '../../../Assets/logomains.png'
import facenav from '../../../Assets/facenav.png'

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
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Navbars = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  let [customeruser, setcustomeruser] = useState(false);
  let [customerresponse, setcustomerresponse] = useState("");
  let [customerbring, setcustomerbring] = useState(false);
  let [packagename, setpackagename] = useState();

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
          //alert("login successfull")
          window.location.reload(false);
      } catch (error) {
        console.log(error)
        alert("Invalid Email or Password")
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
        setpackagename(response.data.packagename)
        console.log("prof",response.data)
        console.log("pac",response.data.packagename)

      } catch (error) {
        console.log("axios error: ", error);
      }
    };
    getProfile();
  }, []);

  const handleLogout = async () => {
    if (!customerresponse.email || !customerresponse.password) {
      console.log('Value is not Given');
      alert("Please enter Missing Fields")
      return
    }
    // https://glorious-hat-bat.cyclic.app      // old url
    else {
      try {
        let response = await axios.post(`http://localhost:8000/listerlogout`, {
          email: customerresponse.email,
          password: customerresponse.password
        }, {
          withCredentials: true
        })
          console.log("logout successful");
          //alert("login successfull")
          navigate("/")
          window.location.reload(false);

      } catch (error) {
        console.log(error)
        alert("Invalid Email or Password")
        setErrorMessage('Invalid Email or Password'); 
      }
    }
  };
  return (
    <div>
      
      <Navbar fluid rounded className='bg-black dark:bg-black'>
      <Navbar.Brand href="https://listit.pk">
        <img src={logomain} className="mr-3 h-16 sm:h-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">

      {customeruser ? (<>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={facenav} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{customerresponse.firstname}</span>
            <span className="block truncate text-sm font-medium">{customerresponse.email}</span>
          </Dropdown.Header>
          <Link to={`/listdisplay/${customerresponse._id}`}>
          <Dropdown.Item onMouseEnter={() =>{setcustomerbring(customerresponse._id);}} >Your Listings</Dropdown.Item>
          </Link>
          {!customerresponse.packagename ? (<>
          <Link to={`/choosepricing/${customerresponse._id}`}>
            <Dropdown.Item >Add Listings</Dropdown.Item>
            </Link>
          </>) : <>
          <Link to={'/Addlisting'}>
          <Dropdown.Item >Add Listings</Dropdown.Item>
          </Link>
          </>}
          <Link to={`/packages/${customerresponse._id}`}>
          <Dropdown.Item >Packages</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        </>) : <>
        <button style={buttonStyle} onClick={handleDialogOpen} className=' rounded-2xl text-xl border-4 border-t-violet-500 border-e-teal-700 border-s-amber-500 border-b-red-500 hover:border-t-amber-500 hover:border-e-violet-500 hover:border-b-teal-500 hover:border-s-red-500 transition'>Sell</button>
        <Dialog open={openDialog} onClose={handleDialogClose}  >
        <DialogTitle>Sign in to our platform</DialogTitle>
        <DialogContent>
          <DialogContentText>
    <div className="space-y-6">
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input type="email" onChange={(event) => { setemail(event.target.value); }} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="name@company.com" required/>
        </div>
        <div>
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" onChange={(event) => { setPassword(event.target.value); }} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required/>
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
        <button type="submit" onClick={() => {LoginForm(); setlogin(true); handleDialogClose(); }} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 ">
            Not registered? <Link to={"/register"}> <span  className="text-blue-700 hover:underline ">Create account</span> </Link>
        </div>
    </div>

          </DialogContentText>
        </DialogContent>

      </Dialog>
        </>}

        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
        <Navbar.Link className='text-lg divhead text-white hover:text-white p-2'> 
          Home
        </Navbar.Link>
        </Link>
        <Link to={"/listings"}>
        <Navbar.Link  className='text-lg divhead text-white hover:text-white p-2'> Listings</Navbar.Link> </Link>

       <Link to={"/pricing"}>
        <Navbar.Link className='text-lg divhead text-white hover:text-white p-2'> Pricing</Navbar.Link></Link>
        <Link to={"/aboutus"}>
        <Navbar.Link className='text-lg divhead text-white hover:text-white p-2'> About Us</Navbar.Link>
        </Link>
        <Link to={"/contact"}>
        <Navbar.Link className='text-lg divhead text-white hover:text-white p-2'> Contact</Navbar.Link> </Link>

      </Navbar.Collapse>
    </Navbar>
    {customerresponse.packagename === "Basic Plan" || customerresponse.packagename === "Standard Plan" || customerresponse.packagename === "Premium Plan" ? (
    <>
       <Helmet>
    <script type="text/javascript">
      {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65a244168d261e1b5f52c7ea/1hk0tjurt';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
      `}
    </script>
  </Helmet>
    </> ):(<>
    
    </>) }
</div>
  )
}

export default Navbars