import React, { useState, useEffect } from 'react'
import Home from '../HOme/Home'
import axios from 'axios'
import Second from '../Corporate/SecondSec/Second'
import ProductGroup from '../FirstPage/ProductGroup/ProductGroup'
import Footer from '../Foooter/Footer'
import Cardss from './Cardss'
import './ProductDetail.css'
import img1 from '../../Images/WhatsApp_Image_2022-02-07_at_17.14.26_.jpg'
import img2 from '../../Images/WhatsApp_Image_2022-02-07_at_16.52.42 (1).jpg'
import BasicPagination from './Pagination'
import { Link } from 'react-router-dom';
import ImageFilter from './SearchFilter'
import CategorySlider from './CategorySlider'
const Prducts = () => {


  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)
  const [page, setPage] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState(9)
  const [StarsArray, setStarsArray] = useState([1, 2, 3])
  let text = "Home  > Product Groups "
  let name = "PRODUCT GROUPS"


  const performSearch = async () => {
    try {
      const response = await axios.get(
        `https://busy-lime-cygnet-hem.cyclic.cloud/api/v1/search?query=${searchInput}`
      );
      console.log("Search results: ", response.data);
      setProducts(response.data.data);
    } catch (error) {
      console.log("Error in performing search: ", error);
    }
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/paginatpost?page=${page}`);
      console.log("response: ", response);
      console.log(response.data);
      setnumberOfPages(response.data.pages)
      setLoadProduct(!loadProduct)
      setProducts(response.data.data);
      console.log("Products" + response.data.data);
    } catch (error) {
      console.log("Error In Getting All Products ", error);
    }
  };

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])

  return (
    <div>
      <Home />
      <div className="bg-cover flex flex-col w-full h-[300px] mb-4" style={{ backgroundImage: 'url(https://www.osimo.com.tr/assets/images/headers/pages.jpg)' }}>
        <div className='flex w-full h-[300px] justify-between items-center px-4 md:px-24'>
          <h1 className='text-white text-sm md:text-xl lg:text-2xl'>{name}</h1>
          <h1 className='text-white text-sm md:text-xl lg:text-2xl'>{text}</h1>




        </div>


      </div>

      <ProductGroup />
    <CategorySlider/>

      <div className='flex  flex-wrap justify-center   '>
        {products.map((eachProduct, i) => (
          <Cardss index={eachProduct._id} price={eachProduct.price} img={eachProduct.imageUrl} text={eachProduct.name} paragraph={eachProduct.description} />
        ))}
      </div>


      <BasicPagination shape="rounded" setPage={setPage} pageNumber={numberOfPages} />

      <Footer />
    </div>
  )
}

export default Prducts