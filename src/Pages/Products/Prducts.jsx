import React from 'react'
import Home from '../HOme/Home'
import Second from '../Corporate/SecondSec/Second'
import ProductGroup from '../FirstPage/ProductGroup/ProductGroup'
import Footer from '../Foooter/Footer'
import Cardss from './Cardss'
import  img1  from  '../../Images/WhatsApp_Image_2022-02-07_at_17.14.26_.jpg'
import img2 from '../../Images/WhatsApp_Image_2022-02-07_at_16.52.42 (1).jpg'
const Prducts = () => {
  return (
    <div>
        <Home/>
        <Second   name="PRODUCT GROUPS" text="Home  > Product Groups " />
<ProductGroup/>

<div  className='flex flex-col m-4 sm:flex-row sm:justify-between'>
  <Cardss   price="500$"   img={img2} text={'Dough Kneading Machine'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/blender-mikser_1.jpeg" text={'Blender/ Mikser'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2022-02-07_at_17.14.26_4.jpeg" text={'Professional Dough Kneading Machine'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
  <Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/QUATTRO.jpg" text={'Oven'} paragraph={'Effortlessly peel potatoes with our advanced machine.'} />
</div>

<div  className='flex flex-col m-4 sm:flex-row sm:justify-between' >
<Cardss   price="500$"   img={img1} text={'OVERTURN DOUGH KNEADING MACHINE'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.34.36.jpeg" text={'DOUGH ROLLER'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss img="https://www.osimo.com.tr/dimg/kategoriler/dik-tipi-buzdolabY.jpeg" text={'REFRIGERATORS'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.35.20.jpeg" text={'MEAT MINCING MACHİNE'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
</div>
<div  className='flex flex-col m-4 sm:flex-row sm:justify-between' >
<Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-24_at_12.08.34.jpeg" text={'ONION CHOPPGING MACHINE'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.35.22_2.jpeg" text={'TOMATO PASTE MACHINE'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/WhatsApp_Image_2020-12-23_at_14.34.57.jpeg" text={'Bread Slicer'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
<Cardss   price="500$"   img="https://www.osimo.com.tr/dimg/kategoriler/planet-mikser.jpeg" text={'Planetary Mixer'}   paragraph={'Effortlessly peel potatoes with our advanced machine.'}  />
</div>

<Footer/>
    </div>
  )
}

export default Prducts