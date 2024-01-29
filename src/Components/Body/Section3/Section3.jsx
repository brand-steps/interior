import './section3.css'
import React, { useState } from 'react';

const Section3 = () => {
const [hover, sethover] = useState(false)


  const divStyle = {
    backgroundImage: `url('https://img.freepik.com/premium-photo/large-luxury-modern-bright-interiors-room-illustration-3d-rendering_653967-4111.jpg')`,
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
    backgroundImage: "url('https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg')",
    width: '300px', // Adjust the width as needed
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
    backgroundImage: "url('https://www.grihakon.com/wp-content/uploads/2019/11/exterior-designing-service-500x500.jpg')",
    width: '300px', // Adjust the width as needed
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
    backgroundImage: "url('https://static.asianpaints.com/content/dam/asian_paints/idea-gallery/regional/Striking-Exterior-Home-Design-Idea.jpg')",
    width: '300px', // Adjust the width as needed
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
    width: '300px', // Adjust the width as needed
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
    width: '300px', // Adjust the width as needed
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
    width: '300px', // Adjust the width as needed
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


  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',

    width: '400px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  return (
    <>
        <div className='ml-4 md:ml-16 p-4 mb-8'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-3xl font-bold mt-6'>Our Projects </div>

  <div className='w-full md:w-72' style={{ "border": "1px solid red" }}>
    {/* Content for the inner div */}
  </div>
</div>



    <div className='flex  justify-evenly flex-wrap my-4' >
    <div className="container">
   <div className="row">
    <div className="col-lg-12">
       <div className="featuredPropBox">
        <ul>
           <li> <a href="#">
             <div className="fplogo"><p className='font-bold text-lg text-white sm:text-2xl lg:text-4xl text-center'>Residential</p></div>
             <div className="fptext">
              <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
            </div>
             </a> </li>
           <li> <a href="#">
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Corporate</p></div>
             <div className="fptext">
              <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
            </div>
             </a> </li>
           <li> <a href="#">
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Commercial</p></div>
             <div className="fptext">
              <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
            </div>
             </a> </li>
          
          
             <li> <a href="#">
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Retail/Shops</p></div>
             <div className="fptext">
              <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
            </div>
             </a> </li>
           <li> <a href="#">
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Studios</p></div>
             <div className="fptext">
              <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
            </div>
             </a> </li>
           <li> <a href="#">
             <div className="fplogo"><p className='font-bold text-white text-lg sm:text-2xl lg:text-4xl text-center'>Rooms</p></div>
             <div className="fptext">
              <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical.</p>
            </div>
             </a> </li>
          
             
         </ul>
      </div>
     </div>
  </div>
 </div>
    </div>

    </>
  );
}

export default Section3;
