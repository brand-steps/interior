// import React from 'react';
import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card } from 'flowbite-react';

const Cardss = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)
  const [page, setPage] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState(9)
 

   const divStyle = {
    cursor: "pointer",
    /* Other styles you might want to apply */
  };
   
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
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
        <div className='mx-6 my-4' style={divStyle}>
            <Carousel
                swipeable={true}
                arrows={true}
                draggable={true}
                autoPlay={true}
                responsive={responsive}

            >
                
                <Card
      className="w-52"

    >
        <img src="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240" alt="img" className='h-40 w-48 ' />
      <a href="#">
        <h6 className="text-sm text-black">
Apple iPhone 14 Pro Max 256GB Deep Purple 5G
        </h6>
        <p className='text-sm font-semibold'>AED: 1200</p>
      </a>

    </Card>
    <Card
      className="w-52"

    >
        <img src="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240" alt="img" className='h-40 w-48 ' />
      <a href="#">
        <h6 className="text-sm text-black">
Apple iPhone 14 Pro Max 256GB Deep Purple 5G
        </h6>
        <p className='text-sm font-semibold'>AED: 1200</p>
      </a>

    </Card>
    <Card
      className="w-52"

    >
        <img src="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240" alt="img" className='h-40 w-48 ' />
      <a href="#">
        <h6 className="text-sm text-black">
Apple iPhone 14 Pro Max 256GB Deep Purple 5G
        </h6>
        <p className='text-sm font-semibold'>AED: 1200</p>
      </a>

    </Card>
    <Card
      className="w-52"

    >
        <img src="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240" alt="img" className='h-40 w-48 ' />
      <a href="#">
        <h6 className="text-sm text-black">
Apple iPhone 14 Pro Max 256GB Deep Purple 5G
        </h6>
        <p className='text-sm font-semibold'>AED: 1200</p>
      </a>

    </Card>
    <Card
      className="w-52"

    >
        <img src="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240" alt="img" className='h-40 w-48 ' />
      <a href="#">
        <h6 className="text-sm text-black">
Apple iPhone 14 Pro Max 256GB Deep Purple 5G
        </h6>
        <p className='text-sm font-semibold'>AED: 1200</p>
      </a>

    </Card>
    <Card
      className="w-52"

    >
        <img src="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240" alt="img" className='h-40 w-48 ' />
      <a href="#">
        <h6 className="text-sm text-black">
Apple iPhone 14 Pro Max 256GB Deep Purple 5G
        </h6>
        <p className='text-sm font-semibold'>AED: 1200</p>
      </a>

    </Card>
    <Card
      className="w-52"

    >
        <img src="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240" alt="img" className='h-40 w-48 ' />
      <a href="#">
        <h6 className="text-sm text-black">
Apple iPhone 14 Pro Max 256GB Deep Purple 5G
        </h6>
        <p className='text-sm font-semibold'>AED: 1200</p>
      </a>

    </Card>
    <Card
      className="w-52"

    >
        <img src="https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240" alt="img" className='h-40 w-48 ' />
      <a href="#">
        <h6 className="text-sm text-black">
Apple iPhone 14 Pro Max 256GB Deep Purple 5G
        </h6>
        <p className='text-sm font-semibold'>AED: 1200</p>
      </a>

    </Card>




            </Carousel>
 
        </div>


    );
};


export default Cardss;

