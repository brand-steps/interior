import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Allproduct.css'
import Sidebaruser from './sidebarUser'

const Allproduct = () => {
  return (
    <div className="flex">
    <Sidebaruser />
    <div className="flex justify-center items-start h-screen w-3/4">
   


    <div  className='flex flex-col w-full'    >
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
        <tr   style={{"width": "100%", 
        'text-align': "center", 
        "display": "flex", 
        "justify-content": "space-between"}} class=" border-b    mb-2       bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* {value.name} */}
                Laptop
            </th>
            <td class="px-6 py-4 text-white">
                {/* ${value.400} */}
                400
            </td>
            <td class="px-6 py-4 text-white">
                {/* {value.category} */}
                category
            </td>
            <td className='lllololo' onClick={() => {
                // deleteData(value._id)
            }} style={{ "color": "red", "cursor": "pointer" }} class="px-6 py-4  ">
                Delete
            </td>
            <td class="px-6 py-4 text-right">
                Edit 
                {/* <BasicModal Image={value.imageUrl} id={value._id} /> */}
            </td>
        </tr>
    
</div>
   
  </div>


  </div>
  )
}

export default Allproduct