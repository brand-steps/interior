import React, { useState } from 'react';
import { useEffect } from 'react';
import './searchbar.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'flowbite-react';
const SearchBar = () => {
  const navigate = useNavigate();
    const [location, setlocation] = useState("")
    const [productname, setproductname] = useState("")
    const [make, setmake] = useState("")
    const [results, setResults] = useState([]);
    const [resultbool, setresultbool] = useState(false);
    const [showbool, setshowbool] = useState(false)
    const [ price, setprice] = useState('')

  const divStyle = {
    width: '900px',
    flexDirection: 'row',


    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '280px', // Adjust the width as needed
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
  
  const validatesearch = async () => {
    if (location === "Location") {
      setlocation("")
    }

    if (!price) {
      setprice("")
    }
    if (price === '0') {
      setprice("")
    }
  }

  const performSearch = async () => {
    if (location === "Location") {
      setlocation("")
    }

    if (!price) {
      setprice("")
    }
    if (price === '0') {
      setprice("")
    }
    try {
      const response = await axios.get(
        `https://list-back-gn1y.vercel.app/api/searchlist?location=${location}&price=${price}&productname=${productname}`
      );
      console.log("Search results: ", response.data);
      setResults(response.data);
      console.log("res", results);
      setresultbool(true);
      setshowbool(true);
    } catch (error) {
      console.log("Error in performing search: ", error);
    }
  };
  return (
    <>
    <div className=' flex justify-evenly mb-6'>
    <div className='maindiv flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle}>
              <select id="country" onChange={(event) => { setlocation(event.target.value);}}  name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Location</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Multan">Multan</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Quetta">Quetta</option>
        <option value="Gawadar">Gawadar</option>

</select>

      </div>
      <div style={containerStyle}>
        <span className='text-left'>Price PKR 0 - {price}</span>
        <Box sx={{ width: 300 }}>
      <Slider onChange={(event) => { setprice(event.target.value); }}
        aria-label="Price"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={1000}
        marks
        min={0}
        max={100000}
      />
    </Box>
      </div>
      
      <div className="flex items-center">   
    <label for="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" onChange={(event) => { setproductname(event.target.value);}} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Listing" required/>

    </div>
    <button onClick={performSearch} className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-violet-500 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
</div>


      </div>  

    </div>
    <div className='flex  justify-center flex-wrap my-4' >

    {results.map((item) => (
                   <div style={containerStyle2}>
                   <Card
         className="max-w-sm"
         imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
         imgSrc={item.imageUrl1}
       >
         <a href="#">
           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
           {item.productname}
           </h5>
         </a>
         <div className="mb-5 mt-2.5 flex items-center">
           <svg
             className="h-5 w-5 text-yellow-300"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
           </svg>
           <svg
             className="h-5 w-5 text-yellow-300"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
           </svg>
           <svg
             className="h-5 w-5 text-yellow-300"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
           </svg>
           <svg
             className="h-5 w-5 text-yellow-300"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
           </svg>
           <svg
             className="h-5 w-5 text-yellow-300"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
           </svg>
           <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
             5.0
           </span>
         </div>
         <div className="flex items-center justify-between">
           <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
           <button onMouseEnter={validatesearch}
             onClick={() => {navigate(`/listdetails/${item._id}`)}}
             className="rounded-lg bg-violet-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
           >
             View More
           </button>
         </div>
       </Card>
   
   
   
         </div>
            ))}
            </div>
    </>
  );
}

export default SearchBar;
