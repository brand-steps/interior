import React from "react"
import { Dropdown } from 'flowbite-react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SearchBar = () => {
    const [values, setvalues] = useState("")
    const [prices, setprices] = useState("")

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',


        width: '800px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
      const buttonStyle = {
        background: '#E5A317',
        color: 'black',
        fontWeight: 'bold',
        padding: '8px 16px',
        marginTop: '12px',
        cursor: 'pointer',

      };
    const txtcolor = {
        color: "#E5A317"
    }
  return (
    <>

        <div className='mx-10 my-6 '>

  <div className="grid md:grid-cols-4 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" name='country' onChange={(event) => { setvalues(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option>Any Model</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Land Rover">Land Rover</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Nissan">Nissan</option>
        <option value="Porche">Porche</option>
        <option value="Subaru">Subaru</option>
        <option value="Porche">Porche</option>


</select>
 </div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" name='country' onChange={(event) => { setvalues(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option>Any Make</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>


</select>
 </div>
    <div className="relative z-0 w-full mb-6 group">
    <Box className="w-20 lg:w-52 md:w-36 sm:w-28">
        <p>Price</p>
      <Slider onChange={(event) => { setprices(event.target.value);}} className="w-full"
      sx={{
        width: 300,
        color: '#E5A317',
        '& .MuiSlider-thumb': {
          borderRadius: '1px',
        },
      }}
        size="small"
        defaultValue={70000}
        aria-label="Small"
        valueLabelDisplay="auto"
        step={10}      
        min={10000}
        max={100000}
      />

    </Box>
     </div>
     <div className="relative z-0 w-full mb-6 group">
     <button style={buttonStyle} className="ml-5 w-56 h-14 mb-2">Search</button>
 </div>
  </div>
</div>


   {/*}  <div className='flex  justify-evenly flex-wrap my-4 ' >
      <div style={containerStyle}>
      <form>
    <div className="flex bg-black h-20 ">
        <div className="mt-5">
        <select id="country" name='country' onChange={(event) => { setvalues(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option>Any Model</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Land Rover">Land Rover</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Nissan">Nissan</option>
        <option value="Porche">Porche</option>
        <option value="Subaru">Subaru</option>
        <option value="Porche">Porche</option>


</select>
    </div>
    <div className="ml-5 mt-5">
    <select id="country" name='country' onChange={(event) => { setvalues(event.target.value);}} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option>Any Make</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>


</select>

    </div>
    
     <div className="ml-5 mt-2 lg:mt-2 md:mt-2 sm:mt-2 mt-2">
    <Box className="w-20 lg:w-52 md:w-36 sm:w-28">
        <p>Price</p>
      <Slider
      sx={{
        color: '#E5A317',
        '& .MuiSlider-thumb': {
          borderRadius: '1px',
        },
      }}
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={10}
        max={110}
      />

    </Box>
    </div>
    <button style={buttonStyle} className="ml-5 w-56 h-14 mb-2">Search</button>

     {/*}   <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos, Design Templates..." required/>
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
  </div> 
    </div>
</form> 

 </div>




      
    </div>
*/}

</>
  )
}

export default SearchBar