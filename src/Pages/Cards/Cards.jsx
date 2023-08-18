import React from 'react'
import img1 from '../../Images/PRODUCT.jpg'
import img2 from '../../Images/E CATALOG.jpg'
import img3 from '../../Images/TECHNICAL SUPPORT.jpg'
import '../HOme/home.css'
const Cards = () => {
  return (
    <div className='mt-4 flex flex-col md:flex-row justify-center items-center md:justify-evenly rounded'>
    <div class="w-11/12 md:w-1/4 mb-4 md:mb-0 shadow-red transform hover:-translate-y-1 hover:scale-105 hover:transition">
        <img src={img1} alt="" class="w-full h-auto" />
    </div>
    <div class="w-11/12 md:w-1/4 mb-4 md:mb-0 shadow-red transform hover:-translate-y-1 hover:scale-105 hover:transition">
        <img src={img2} alt="" class="w-full h-auto" />
    </div>
    <div class="w-11/12 md:w-1/4 shadow-red transform hover:-translate-y-1 hover:scale-105 hover:transition">
        <img src={img3} alt="" class="w-full h-auto" />
    </div>
</div>

  
  )
}

export default Cards