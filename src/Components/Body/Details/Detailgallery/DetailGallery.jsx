import React, { useState } from 'react';
import './detailgallery.css'
const DetailGallery = () => {
const [hover, sethover] = useState(false)


const divStyle = {
  backgroundImage: `url('https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers.png')`,
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
    width: '400px', // Adjust the width as needed

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px', // Adjust the width as needed
    height: '200px',

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle3 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://static.asianpaints.com/content/dam/asian_paints/idea-gallery/regional/Striking-Exterior-Home-Design-Idea.jpg')",
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
    backgroundImage: "url('https://foyr.com/learn/wp-content/uploads/2019/06/furniture-design-software.jpg')",
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
    backgroundImage: "url('https://images.landscapingnetwork.com/pictures/images/331x255Exact/fountain_96/custom-sheer-descent-fountain-simple-elegance_9787.jpg')",
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
    backgroundImage: "url('https://media.designcafe.com/wp-content/uploads/2020/10/30191814/studio-apartment-design.jpg')",
    width: '400px', // Adjust the width as needed
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPepeat: 'no-repeat'
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const imageStyle2 = {
    width: '390px',
    height: '590px',
    marginBottom: '16px',
  };
  const imageStyle = {
    width: '390px',
    height: '200px',
    marginBottom: '16px',
  };



  return (
    <>


    <div >
        <div className='ml-4 md:ml-16 p-4 '>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl text-center md:text-3xl font-bold mt-6'>Some Glimpse of our Interior Designs </div>

 {/* <div className='w-full md:w-72 text-center' style={{ "border": "1px solid red" }}>
     Content for the inner div 
  </div>*/}
</div>
    <div className='flex  justify-evenly  flex-wrap my-4 pt-12 py-16' >
    <div style={containerStyle} className='hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>

<div style={containerStyle} className='hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>
<div style={containerStyle} className='hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>
<div style={containerStyle} className='hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>

<div style={containerStyle} className='hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>
<div style={containerStyle} className='hover:opacity-80 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>

      </div>
      </div>
    </>
  );
}

export default DetailGallery;
