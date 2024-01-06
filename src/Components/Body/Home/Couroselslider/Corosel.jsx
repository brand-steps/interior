import React from 'react';
import './corosel.css';
import { Carousel } from 'flowbite-react';
import banner1 from '../../../../Assets/banner5.jpg'
import banner2 from '../../../../Assets/banner2.jpg'
import banner3 from '../../../../Assets/banner3.jpg'
import banner4 from '../../../../Assets/banner4.jpg'
import bannertext from '../../../../Assets/bannertext.jpg'
import bannertext2 from '../../../../Assets/bannertext2.jpg'
import bannertext3 from '../../../../Assets/bannertext3.jpg'

const Corosel = () => {
    //leftControl="left" rightControl="right"
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel >
      <img src={bannertext} alt="..." />
      <img src={bannertext2} alt="..." />
      <img src={bannertext3} alt="..." />
      <img src={banner1} alt="..." />

    </Carousel>
  </div>
  )
}

export default Corosel