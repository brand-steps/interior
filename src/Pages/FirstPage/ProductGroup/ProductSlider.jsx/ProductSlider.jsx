// import React from 'react';
import React, { useState , useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cardss from '../../../Products/Cardss';
import img2 from '../../../../Images/WhatsApp_Image_2022-02-07_at_16.52.42 (1).jpg'
import  img1  from  '../../../../Images/WhatsApp_Image_2022-02-07_at_17.14.26_.jpg'
import axios from 'axios';
const ProductSlider = () => {
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

 useEffect(() => {
        console.log('asdasd')
        getAllProducts()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean ])



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
      <Cardss img={img2} text={'Dough Kneading Machine'}  price={"600"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
      <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/blender-mikser_1.jpeg" price={"700"}  text={'Blender/ Mikser'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2022-02-07_at_17.14.26_4.jpeg" price={"800"}  text={'Professional Dough Kneading Machine'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://www.osimo.com.tr/dimg/kategoriler/QUATTRO.jpg" price={"900"}  text={'Oven'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img={img1} text={'OVERTURN DOUGH KNEADING MACHINE'}   price={"1000"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.34.36.jpeg"  price={"1200"} text={'DOUGH ROLLER'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/dik-tipi-buzdolabY.jpeg" text={'REFRIGERATORS'}   price={"400"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.35.20.jpeg"  price={"1300"} text={'MEAT MINCING MACHİNE'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
  
    </Carousel>
  );
};

export default ProductSlider;
