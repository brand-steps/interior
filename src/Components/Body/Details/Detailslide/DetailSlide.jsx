import React, { useState, useEffect } from 'react';



import { useNavigate } from 'react-router-dom';


const DetailSlide = (props) => {



  const divStyle = {
    backgroundImage: `url('https://img.freepik.com/premium-photo/large-luxury-modern-bright-interiors-room-illustration-3d-rendering_653967-4111.jpg')`,
    /* Other styles you might want to apply */
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',

    width: '650px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '630px',
    height: '380px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#EC0C36',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  const navigate = useNavigate();
  const images = [props.img1,props.img2 , props.img3];
  const headings = [' Best Quality Service', 'Best Quality Service', 
  'Best Selling Website'];
  const paragraphs = [
    'Browse Our Collection',
    'Browse Our Collection',
    ' Browse Our Collection',
    'Browse Our Collection',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setCurrentHeadingIndex((prevIndex) => (prevIndex === 0 ? headings.length - 1 : prevIndex - 1));
    setCurrentParagraphIndex((prevIndex) => (prevIndex === 0 ? paragraphs.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setCurrentHeadingIndex((prevIndex) => (prevIndex === headings.length - 1 ? 0 : prevIndex + 1));
    setCurrentParagraphIndex((prevIndex) => (prevIndex === paragraphs.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextImage();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [nextImage]);
  return (
    <div>
    <div className='flex  justify-evenly flex-wrap mb-4' style={divStyle} >
    <div style={containerStyle}>
      <div className="mx-auto relative 	" >  {/* py-2 */}
    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="max-w-full rounded-xl" style={imageStyle}/>

    {/* Centered Heading and Paragraph */}


    {/* Left Icon */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">

    </div>

    {/* Right Icon */}
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">

    </div>
  </div>
      </div>
      <div style={containerStyle}>
      <h1 className='text-3xl font-bold text-black mt-6 mb-12'>{props.heading}</h1> 
        <p className='text-black text-lg font-semibold'>{props.description} </p>
  {/*    <div className="mx-auto relative w-12/12 h-5/6	">  
      <h1 className='text-xl lg:text-7xl md:text-5xl sm:text-3xl font-extrabold mb-9 txtcolor'>{headings[currentHeadingIndex]} </h1>
<h1 className='text-6xl font-bold text-black'>Brighton Car Sales</h1>    


    
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">

    </div>

    
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
    
    </div>
  </div> */}
      </div>




      
    </div>
    </div>
  );
}

export default DetailSlide;
