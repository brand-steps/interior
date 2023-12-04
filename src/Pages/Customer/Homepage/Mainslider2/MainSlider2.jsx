import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../../../Assests/png-01.png';
import image2 from '../../../../Assests/png-02.png';
import image3 from '../../../../Assests/png-03.png';
import image4 from '../../../../Assests/png-04.png';
import back from '../../../../Assests/back.avif';

import { useNavigate } from 'react-router-dom';


const MainSlider2 = () => {



  const divStyle = {
    backgroundImage: `url('https://img.freepik.com/premium-photo/driving-empty-road-with-night-lights-fog-3d-render_379823-2735.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699920000&semt=ais')`,
    /* Other styles you might want to apply */
    backgroundSize: "cover",
    backgroundPosition: "center",
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
  const images = [image1, image2, image3, image4];
  const headings = [' Best Quality Service', 'Best Quality Service', 
  'Best Selling Website', 'Best Selling Website'];
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
    <div className='flex  justify-evenly flex-wrap mb-4' style={divStyle}>
      <div style={containerStyle}>
      <div className="mx-auto relative w-12/12 h-5/6	">  {/* py-2 */}
      <h1 className='text-xl lg:text-7xl md:text-5xl sm:text-3xl font-extrabold mb-9 txtcolor'>{headings[currentHeadingIndex]} </h1>
<h1 className='text-6xl font-bold text-white'>Brighton Car Sales</h1>    {/* Centered Heading and Paragraph */}


    {/* Left Icon */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">

    </div>

    {/* Right Icon */}
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
    
    </div>
  </div>
      </div>
      <div style={containerStyle}>
      <div className="mx-auto relative 	" >  {/* py-2 */}
    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="max-w-full " style={imageStyle}/>

    {/* Centered Heading and Paragraph */}


    {/* Left Icon */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">

    </div>

    {/* Right Icon */}
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">

    </div>
  </div>
      </div>



      
    </div>
    </div>
  );
}

export default MainSlider2;
