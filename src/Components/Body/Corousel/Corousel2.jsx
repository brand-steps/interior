import React from 'react';
import { Carousel } from 'flowbite-react';

function Corousel2() {
  const divStyle = {
    backgroundImage: `url('https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Dark-modern-house-interior-design.jpg')`,
    /* Other styles you might want to apply */
    backgroundSize: "cover",
    backgroundPosition: "center",
    };
    const divStyle2 = {
      backgroundImage: `url('https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-1.jpg')`,
      /* Other styles you might want to apply */
      backgroundSize: "cover",
      backgroundPosition: "center",
      };
      const divStyle3 = {
        backgroundImage: `url('https://www.luxxu.net/blog/wp-content/uploads/2017/06/Home-Decor-Ideas-for-A-Dark-And-Luxurious-Interior-1.jpg')`,
        /* Other styles you might want to apply */
        backgroundSize: "cover",
        backgroundPosition: "center",
        };
  return (
        <>
          <div className="h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400" style={divStyle}>
          <p className='font-bold text-3xl text-white'>Expertise For Interior Designing</p>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400" style={divStyle2}>
        <p className='font-bold text-3xl text-white'>Interior Design Is Thinking</p>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400" style={divStyle3}>
        <p className='font-bold text-3xl text-white'>interior Remodelling to Remake</p>
        </div>
      </Carousel>
    </div>
        </>
  );
}

export default Corousel2;