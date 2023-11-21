import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../../../Assests/car1.jpg';
import image2 from '../../../../Assests/car2.jpg';
import image3 from '../../../../Assests/car3.jpg';


import { useNavigate } from 'react-router-dom';

const MainSlider = () => {
  const navigate = useNavigate();
  const images = [image1, image2, image3, image1];
  const headings = [' Welcome to Brighton Cars', 'Welcome to Brighton Cars ', 
  'Welcome to Brighton Cars', 'Welcome to Brighton Cars'];
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
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [nextImage]);

  return (
    <div className="mx-auto relative w-12/12 h-5/6	">  {/* py-2 */}
    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="max-w-full opacity-70" />

    {/* Centered Heading and Paragraph */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-white text-3xl font-semibold">{headings[currentHeadingIndex]}</h1>
     {/*} <p className="text-white mt-2">{paragraphs[currentParagraphIndex]}</p> */}
      <button
      onClick={() => {navigate("/Prducts")}}
        style={{ "background": "#00072d" }}
        className="text-white font-semibold px-4 py-2 -2  rounded-lg mt-4 hover:bg-blue-700 "
      >
        Browse Our Collections
      </button>
    </div>

    {/* Left Icon */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
      <button
        className="text-white font-semibold px-4 py-2 rounded-lg mr-2 hover:text-blue-700"
        onClick={prevImage}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </button>
    </div>

    {/* Right Icon */}
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
      <button
        className="text-white font-semibold px-4 py-2 rounded-lg ml-2 hover:text-blue-700"
        onClick={nextImage}
      >
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
    </div>
  </div>

  );
};

export default MainSlider;
