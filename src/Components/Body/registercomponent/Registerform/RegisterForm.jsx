import React, { useState } from 'react';
import { useEffect } from 'react';
import './registerform.css'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'flowbite-react';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState()
  const [firstname, setFirstName] = useState()
  const [lastname, setLastName] = useState()
  const [phone, setPhone] = useState()
  const [company, setCompany] = useState()
  const [postal, setPostal] = useState()
  const [vat, setVat] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [packagename, setpackagename] = useState()
  const [password, setPassword] = useState()
  const [reTypepassword, setReTypePassword] = useState()
  const [reTypePasswordError, setReTypePasswordError] = useState(false);

  const [signupbool, setsignupbool] = useState(true);
  const [packagebool, setpackagebool] = useState(false);

  const divStyle = {
    width: '900px',
    flexDirection: 'row',


    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',

    width: '850px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '320px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const imageStyle = {
    width: '80px',
    height: '80px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#EC0C36',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  const signupForm = async () => {


    console.log('Signup Form');

   

    if (password !== reTypepassword) {
      setReTypePasswordError('Passwords do not match');
      return;
    }


    if (firstname && email && phone && postal && address &&city && packagename && password && reTypepassword) {
      try {
        const response = await axios.post('http://localhost:8000/listerregister', {
          firstname,
          lastname,
          email,
          phone,
          postal,
          address,
          city,
          state,
          packagename,
          password,
        });

        // Handle the response according to your needs
        if (response.status === 201) {
          console.log('Signup successful');
          alert("you have successfully registered");
          navigate('/')
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
    else {
      alert("Kindly fill all the fileds")
    }

  };

  return (
    <>
    
    {signupbool && (
      <>
          <div className=' flex justify-evenly mb-6'>
    <div className='maindiv flex  justify-evenly flex-wrap bg-white w-5/6 pt-5' >

              <div style={containerStyle}>
            
        <div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text"  name="firstname" id="firstname" onChange={(event) => { setFirstName(event.target.value); }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="lastname"  id="lastname" onChange={(event) => { setLastName(event.target.value); }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
    
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
      <input type="number" name="phone"  id="phone" onChange={(event) => { setPhone(event.target.value); }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="number"  name="postal" id="postal" onChange={(event) => { setPostal(event.target.value); }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal</label>

  </div>
  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="email" id="email" onChange={(event) => { setemail(event.target.value); }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="password" id="password" onChange={(event) => { setPassword(event.target.value); }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="retype" id="retype" onChange={(event) => { setReTypePassword(event.target.value); setReTypePasswordError("") }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="retype" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
      {reTypePasswordError && <p className="error-message text-red-500">{reTypePasswordError}</p>} 

  </div>
  </div>

  <div className="relative z-0 w-full mb-6 group">
      <input name="address" id="address" onChange={(event) => { setAddress(event.target.value); }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>

  </div>


  


  <div className="grid md:grid-cols-2 md:gap-6">

    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="city" id="city" onChange={(event) => { setCity(event.target.value); }} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="state" id="state" onChange={(event) => { setState(event.target.value);}} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
    </div>
  </div>
  <button type="submit" onClick={() => {setsignupbool(false); setpackagebool(true);}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
</div>

        
      </div>
      

      </div>   
    </div>
      </>
    )}
        {packagebool && (
      <>
          <div className='flex  justify-center flex-wrap my-4' >

<div style={containerStyle2}>
<Card className='max-w-sm'>
<h5 className="mb-4 text-xl font-medium text-gray-500 ">Free plan</h5>
<div className="flex items-baseline text-gray-900">
  <span className="text-3xl font-semibold">$</span>
  <span className="text-5xl font-extrabold tracking-tight">00</span>
  <span className="ml-1 text-xl font-normal text-gray-500 "></span>
</div>
<ul className="my-7 space-y-5">
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">2 team members</span>
  </li>
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">
      20GB Cloud storage
    </span>
  </li>
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">Integration help</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
  </li>
</ul>
<button onTouchStart={()=> {setpackagename("Free Plan");}}
onMouseEnter={()=> {setpackagename("Free Plan");}}
  onClick={()=> { signupForm()}}
  className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 "
>
  Choose plan
</button>
</Card>



</div>
<div style={containerStyle2}>
<Card className='max-w-sm'>
<h5 className="mb-4 text-xl font-medium text-gray-500 ">Weekly plan</h5>
<div className="flex items-baseline text-gray-900">
  <span className="text-3xl font-semibold">$</span>
  <span className="text-5xl font-extrabold tracking-tight">49</span>
  <span className="ml-1 text-xl font-normal text-gray-500 ">/Week</span>
</div>
<ul className="my-7 space-y-5">
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">2 team members</span>
  </li>
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">
      20GB Cloud storage
    </span>
  </li>
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">Integration help</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
  </li>
</ul>
<button onTouchStart={()=> {setpackagename("Weekly Plan");}}
 onMouseEnter={()=> {setpackagename("Weekly Plan");}}
  onClick={()=> { signupForm()}}
  className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 "
>
  Choose plan
</button>
</Card>



</div>
<div style={containerStyle2}>
<Card className='max-w-sm'>
<h5 className="mb-4 text-xl font-medium text-gray-500 ">Monthly plan</h5>
<div className="flex items-baseline text-gray-900">
  <span className="text-3xl font-semibold">$</span>
  <span className="text-5xl font-extrabold tracking-tight">49</span>
  <span className="ml-1 text-xl font-normal text-gray-500 ">/Month</span>
</div>
<ul className="my-7 space-y-5">
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">2 team members</span>
  </li>
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">
      20GB Cloud storage
    </span>
  </li>
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">Integration help</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
  </li>
</ul>
<button onTouchStart={()=> {setpackagename("Monthly Plan");}}
onMouseEnter={()=> {setpackagename("Monthly Plan");}}
  onClick={()=> { signupForm()}}
  className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 "
>
  Choose plan
</button>
</Card>



</div>
<div style={containerStyle2}>
<Card className='max-w-sm'>
<h5 className="mb-4 text-xl font-medium text-gray-500 ">Yearly plan</h5>
<div className="flex items-baseline text-gray-900">
  <span className="text-3xl font-semibold">$</span>
  <span className="text-5xl font-extrabold tracking-tight">49</span>
  <span className="ml-1 text-xl font-normal text-gray-500 ">/year</span>
</div>
<ul className="my-7 space-y-5">
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">2 team members</span>
  </li>
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">
      20GB Cloud storage
    </span>
  </li>
  <li className="flex space-x-3">
    <svg
      className="h-5 w-5 shrink-0 text-cyan-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ">Integration help</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
  </li>
  <li className="flex space-x-3 line-through decoration-gray-500">
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 "
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
  </li>
</ul>
<button
onTouchStart={()=> {setpackagename("Yearly Plan");}}
 onMouseEnter={()=> {setpackagename("Yearly Plan");}}
  onClick={()=> { signupForm()}}
  className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 "
>
  Choose plan
</button>
</Card>



</div>
</div>
      </>
    )}

    </>
  );
}

export default RegisterForm;
