import React from 'react';
import './corosel.css';
import { Carousel } from 'flowbite-react';

const Corosel = () => {
    //leftControl="left" rightControl="right"
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel >
      <img src="https://artcarts.in/wp-content/uploads/2023/07/art-carts-banner-2.o-1.png" alt="..." />
      <img src="https://rapidlash.com/cdn/shop/files/WinterThemeBanner_1600x.jpg?v=1702307769" alt="..." />
      <img src="https://assets.intleflorist.com/site/0081A/Homepage/IF%20124%20Summer%20Homepage%20Banner%201500x400px.png" alt="..." />
      <img src="https://gravesendflorist.com/wp-content/uploads/2022/12/flower_homepage_fa_desktop_2.jpg" alt="..." />
    </Carousel>
  </div>
  )
}

export default Corosel