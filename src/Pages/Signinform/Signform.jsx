import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './signinform.css'
import Loginbar from '../HOme/Loginbar';

const Signform = () => {
  const navigate = useNavigate();
    const [email, setemail] = useState()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [phone, setPhone] = useState()
    const [company, setCompany] = useState()
    const [postal, setPostal] = useState()
    const [vat, setVat] = useState()
    const [address, setAddress] = useState()
    const [companyaddress, setComAddress] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [password, setPassword] = useState()
    const [reTypepassword, setReTypePassword] = useState()

    const [emailError, setEmailError] = useState();
    const [firstnameError, setFirstError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [CompanyError, setCompanyError] = useState();
    const [postalError, setPostalError] = useState();
    const [addressError, setAddressError] = useState();
    const [countryError, setCountryError] = useState();
    const [cityError, setCityError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [reTypePasswordError, setReTypePasswordError] = useState(false);


    const signupForm = async () => {


        console.log('Signup Form');
        if (!email) {
          setEmailError("Please enter your email");
          console.log("ss",email)
          //setPasswordError(!password);
          //setReTypePasswordError(!reTypepassword);
          return;
        }
        if (!firstname) {
            setFirstError("please enter your first Name");
            return;
          }
          if (!phone) {
            setPhoneError("please enter your mobile number");
            return;
          }
          if (!company) {
            setCompanyError("please enter your company");
            return;
          }
          if (!postal) {
            setPostalError("Please enter your postal code");
            return;
          }
          if (!address) {
            setAddressError("Please enter your address");
            return;
          }
          if (!country || country === "Select a country") {
            setCountry("");
            setCountryError("Please select a country")
          }
          if (!city) {
            setCityError("please enter your city");
            return;
          }
          if (!password) {
            setPasswordError("Please enter your password");
            return;
          }
    
        if (password !== reTypepassword) {
          setReTypePasswordError('Passwords do not match');
          return;
        }


        if (firstname && email && phone && company && postal && address &&country &&city && password && reTypepassword) {
          try {
            const response = await axios.post('http://localhost:8000/register', {
              firstname,
              lastname,
              email,
              phone,
              company,
              postal,
              vat,
              address,
              companyaddress,
              country,
              city,
              state,
              password,
            });
    
            // Handle the response according to your needs
            if (response.status === 201) {
              console.log('Signup successful');
              alert("you have successfully registered");
              navigate("/Loginform")
              
              // Perform any necessary actions on successful signup
            } else {
              console.log('Signup failed');

              // Handle signup failure
            }
          } catch (error) {
            console.error(error);
            alert("User with this Email ID already exist!")
            // Handle error
          }
    
        }
    
      };

    return (
        <>
        <Loginbar/>
        <div className='rootcontainers'>
        <h1 className='Headings bg-cyan-950 text-white'>Registeration For Vendors</h1>
        </div>
        <hr/>
   <div className='rootcontainer'>
        <h3 className='Heading'>Your Personal Details</h3>
        <TextField fullWidth  onChange={(event) => { setemail(event.target.value); setEmailError("") }} label="Email" placeholder='Enter your Email' type='email' name="email" variant="outlined" />
        {emailError && <p className="error-message">{emailError}</p>} 
        
        <TextField fullWidth  onChange={(event) => { setFirstName(event.target.value); setFirstError("") }} label="First Name" placeholder='Enter your First Name' name="firstname" variant="outlined"  />
        {firstnameError && <p className="error-message">first name required</p>} 
        
        <TextField fullWidth  onChange={(event) => { setLastName(event.target.value) }} label="Last Name" placeholder='Enter your Last Name' name="lastname" variant="outlined"  />
        <TextField fullWidth  onChange={(event) => {setPhone (event.target.value); setPhoneError("")}} label="Mobile" placeholder='Enter your Mobile Number' name="phone" type='number' variant="outlined"  />
        {phoneError && <p className="error-message">{phoneError}</p>} 
        
        <TextField fullWidth  onChange={(event) => {setCompany (event.target.value); setCompanyError("") }} label="Company" placeholder='Enter your Company Name' name="company" variant="outlined"  />
        {CompanyError && <p className="error-message">{CompanyError}</p>} 
        
        <h3 className='Heading'>Your Address</h3>
        <TextField fullWidth  onChange={(event) => { setPostal(event.target.value); setPostalError("") }} label="Postal Code" placeholder='Enter postal code' name="postal" type='number' variant="outlined"  />
        {postalError && <p className="error-message">{postalError}</p>} 
        
        <TextField fullWidth  onChange={(event) => { setVat(event.target.value) }} label="VAT" placeholder='Enter your VAT Reg Number' name="vat" type='number' variant="outlined"  />
        <TextField fullWidth  onChange={(event) => { setAddress(event.target.value); setAddressError("") }} label="Your Address" placeholder='Enter your Address' name="address" variant="outlined"  />
        {addressError && <p className="error-message">{addressError}</p>} 
       
        <TextField fullWidth  onChange={(event) => { setComAddress(event.target.value) }} label="Company Address" placeholder='Enter company Address' name="companyaddress" variant="outlined"  />
        {/*<TextField fullWidth  onChange={(event) => { setCountry(event.target.value) }} placeholder='Enter your Country' name="country" variant="outlined"  />
        */}
  <select id="country" onChange={(event) => { setCountry(event.target.value); setCountryError("") }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select a country</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="germany">Germany</option>
</select>
{countryError && <p className="error-message">{countryError}</p>} 
        <TextField fullWidth  onChange={(event) => { setCity(event.target.value); setCityError("") }} label="City" placeholder='Enter your City' name="city" variant="outlined"  />
        {cityError && <p className="error-message">{cityError}</p>} 
        <TextField fullWidth  onChange={(event) => { setState(event.target.value) }} label="State" placeholder='Enter your State' name="state" variant="outlined"  />

<h3 className='Heading'>Your Password</h3>
        <TextField fullWidth  onChange={(event) => { setPassword(event.target.value); setPasswordError("") }} label="Password" name="password" type='password' placeholder='Enter your Password' variant="outlined" />
        {passwordError && <p className="error-message">{passwordError}</p>} 
        
        <TextField fullWidth  onChange={(event) => { setReTypePassword(event.target.value); setReTypePasswordError("") }} label="Retype Password" name="retype" type='password' placeholder='Retype Password' variant="outlined" />
        {reTypePasswordError && <p className="error-message">{reTypePasswordError}</p>} 
        <Button fullWidth onClick={signupForm} variant="contained">Register</Button>
        </div>

        </>
    )
};
export default Signform;