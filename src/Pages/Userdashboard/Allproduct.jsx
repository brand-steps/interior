import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Allproduct.css'
import Sidebaruser from './sidebarUser'

const Allproduct = () => {
    const [products, setProducts] = useState([]);
    const [productsBoolean, setProductsBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
  
    const getAllProducts = async () => {
        try {
          const response = await axios.get(`https://busy-lime-cygnet-hem.cyclic.cloud/api/v1/products`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all products", error);
        }
      };
    
      const deleteData = async (id)=>{
        try {
          const response = await axios.delete(`https://busy-lime-cygnet-hem.cyclic.cloud/api/v1/customer/${id}`)
          console.log("response: ", response.data);
          setdelete(!Delete)
        } catch (error) {
          console.log("error in getting all products", error);
        }
      }
    
      useEffect(() => {
        console.log('asdasd')
        getAllProducts()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean ])
    



  return (
    <div className="flex flex-wrap">
    <Sidebaruser />
    <div className="flex mt-4 justify-center  h-screen w-3/4">
   


    <div  className='flex flex-col w-full'    >
    {products.map((value)=>(
                <>
            <tr    style={{"display" : "flex  " , "justifyContent" : "space-between"}}    class=" border-b     bgbg-gray-700 dark:bg-gray-800 dark:border-gray-700">

                <th  style={{"width" : "400px " }}  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value.name}
                </th>
                <td class="px-6 py-4">
                ${value.price}
                </td>
                <td class="px-6 py-4" style={{"width" : "100px " }}>
                   {value.category}
                </td>
                <td    className='lllololo'   onClick={()=>{
                    deleteData(value._id)
                }}  style={{"color" : "red" , "cursor" : "pointer" }    } class="px-6 py-4  ">
                Delete
                </td>
                <td class="px-6 py-4 text-right">
                    {/* <BasicModal   Image = {value.imageUrl}    id={value._id}    /> */}
                </td>
            </tr>
           </>
            ))}
    
</div>
   
  </div>


  </div>
  )
}

export default Allproduct