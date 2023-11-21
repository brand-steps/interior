// import React from 'react';
import React, { useState , useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cardss from '../../../../Components/Body/Home/Cards/Cardss';
import img1 from '../../../../Assests/carback3.jpg'
import axios from 'axios';
const Productdisplay = () => {
const [products, setProducts] = useState([]);
const [productsBoolean, setProductsBoolean] = useState(false);
const [Delete , setdelete] = useState(false);



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
      <Cardss img="https://smgmedia.blob.core.windows.net/images/129726/640/bmw-440i-coupe-petrol-69aa018634fa.jpg" text={'Porsche Macan'}  price={"600"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
      <Cardss img="https://smgmedia.blob.core.windows.net/images/129726/640/porsche-macan-suv-petrol-2b7959af383d.jpg" price={"700"}  text={'BMW M135i'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://smgmedia.blob.core.windows.net/images/129726/640/bmw-440i-coupe-petrol-69aa018634fa.jpg" price={"800"}  text={'Toyota Land Cruiser'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://smgmedia.blob.core.windows.net/images/129726/640/porsche-cayenne-estate-petrol-d331b2e5a1ff.jpg" price={"900"}  text={'Oven'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss img="https://smgmedia.blob.core.windows.net/images/129726/640/bmw-440i-coupe-petrol-69aa018634fa.jpg" text={'OVERTURN Porsche Macan'}   price={"1000"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://smgmedia.blob.core.windows.net/images/129726/640/porsche-macan-suv-petrol-2b7959af383d.jpg"  price={"1200"} text={'Toyota Land Cruiser'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://smgmedia.blob.core.windows.net/images/129726/640/bmw-440i-coupe-petrol-69aa018634fa.jpg" text={'REFRIGERATORS'}   price={"400"}  paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://smgmedia.blob.core.windows.net/images/129726/640/porsche-cayenne-estate-petrol-d331b2e5a1ff.jpg"  price={"1300"} text={'Toyota Land Cruiser'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
  
         
    </Carousel>
  );
};

export default Productdisplay;
