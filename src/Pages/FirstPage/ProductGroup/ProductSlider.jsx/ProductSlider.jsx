import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cardss from '../../../Products/Cardss';
import img2 from '../../../../Images/WhatsApp_Image_2022-02-07_at_16.52.42 (1).jpg'
import  img1  from  '../../../../Images/WhatsApp_Image_2022-02-07_at_17.14.26_.jpg'
const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
    swipeable={true}
    arrows={true} 
    draggable={true} 
    autoPlay={true}
    responsive={responsive}>
      <Cardss img={img2} text={'Dough Kneading Machine'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
      <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/blender-mikser_1.jpeg" text={'Blender/ Mikser'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2022-02-07_at_17.14.26_4.jpeg" text={'Professional Dough Kneading Machine'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/QUATTRO.jpg" text={'Oven'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img={img1} text={'OVERTURN DOUGH KNEADING MACHINE'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.34.36.jpeg" text={'DOUGH ROLLER'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/dik-tipi-buzdolabY.jpeg" text={'REFRIGERATORS'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.35.20.jpeg" text={'MEAT MINCING MACHİNE'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
      {/* <div className="carousel-item   ">
        <div className="carousel-content text-left">
          <img src="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.34.36.jpeg" alt="" className="w-4/5 mx-auto" />
          <div className='ml-12 mt-6'  >

          <span className="block">Dough Roller </span>
          <button
            style={{ background: "#EC0C36" }}
            className="text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
          >
            Product View
          </button>
          </div>
        </div>
      </div>
      <div className="carousel-item   ">
        <div className="carousel-content text-left">
          <img src="https://www.osimo.com.tr/dimg/kategoriler/dik-tipi-buzdolabY.jpeg" alt="" className="w-4/5 mx-auto" />
          <div className='ml-12 mt-6'  >

          <span className="block">Refrigerators</span>
          <button
            style={{ background: "#EC0C36" }}
            className="text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
          >
            Product View
          </button>
          </div>
        </div>
      </div>
      <div className="carousel-item   ">
        <div className="carousel-content text-left">
          <img src="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.35.20.jpeg" alt="" className="w-4/5 mx-auto" />
          <div className='ml-12 mt-6'  >

          <span className="block">Meat Mincing Machine </span>
          <button
            style={{ background: "#EC0C36" }}
            className="text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
          >
            Product View
          </button>
          </div>
        </div>
      </div>
      <div className="carousel-item   ">
        <div className="carousel-content text-left">
          <img src="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-24_at_12.08.34.jpeg" alt="" className="w-4/5 mx-auto" />
          <div className='ml-12 mt-6'  >

          <span className="block">Onion  Chopping Machine</span>
          <button
            style={{ background: "#EC0C36" }}
            className="text-white font-semibold px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
          >
            Product View
          </button>
          </div>
        </div>
      </div> */}
      
      {/* Repeat the above structure for other carousel items */}
      
    </Carousel>
  );
};

export default ProductSlider;
