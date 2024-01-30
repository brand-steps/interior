import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Section2 = () => {
const [hover, sethover] = useState(false)


const divStyle = {
  backgroundImage: `url('https://t3.ftcdn.net/jpg/03/73/51/06/360_F_373510690_cQQLplLNbi0l84A7sftZq8dSvdKOGCcj.jpg')`,
  /* Other styles you might want to apply */
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
  };

  const divStyleimage = {
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNMdSv1SKgloyVeqRrTk7ksR8hE0juNJpTg&usqp=CAU')",
    /* Other styles you might want to apply */
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://i.pinimg.com/736x/8e/96/5e/8e965eccc96a868ddfd0bf77b365f168.jpg')",
    width: '400px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://i.pinimg.com/736x/64/41/b9/6441b994edbd71f2754c17fb733af948.jpg')",
    width: '400px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle3 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://img.freepik.com/premium-photo/modern-house-exterior-with-garage-design-dark-gray-color_124507-22179.jpg')",
    width: '400px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle4 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://img.freepik.com/premium-photo/dark-living-room-interior-design-with-sofa-plant-3d-rendering-background_517102-221.jpg')",
    width: '400px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle5 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://dhb3yazwboecu.cloudfront.net/1384/home/Home_Kubik_slide_1000x947.webp')",
    width: '400px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle6 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://img.pikbest.com/ai/illus_our/20230428/9c9d8d8ac74298b98d5981dadda1ce62.jpg!w700wp')",
    width: '400px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const imageStyle = {
    width: '390px',
    height: '200px',
    marginBottom: '16px',
  };



  return (
    <>
    <div style={divStyle}>
        <div className='ml-4 md:ml-16 p-4 mb-8'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-3xl font-bold mt-6'>Services We Do </div>

  <div className='w-full md:w-72' style={{ "border": "1px solid red" }}>
    {/* Content for the inner div */}
  </div>
</div>
    <div className='flex  justify-evenly flex-wrap my-4 pt-12 py-16' >
      <Link to={'/interiordesign'}>
    <div style={containerStyle} className='mt-4 hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
<p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> Interior Design</p>
</div>
</Link> 
<Link to={"/exteriordetails"}>
<div style={containerStyle2} className='mt-4 hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>Exterior Design</p>
      </div>
      </Link>
      <Link to={"/Architecturedetails"}>
      <div style={containerStyle3} className='mt-4 hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>Architecture & Construction</p>
      </div>
      </Link>

    
      <Link to={"/Furnituredetails"}>
    <div style={containerStyle4} className='mt-4 hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> Custom Made Furniture</p>
      </div>
      </Link>
      <Link to={"/Landscapingdetails"}>
      <div style={containerStyle5} className='mt-4 hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> Landscaping & Fountains</p>
      </div>
      </Link>
      <Link to={"/Studiodetails"}>
      <div style={containerStyle6} className='mt-4 hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> 3D Studio</p>
      </div>
      </Link>
      </div>
      </div>
    </>
  );
}

export default Section2;
