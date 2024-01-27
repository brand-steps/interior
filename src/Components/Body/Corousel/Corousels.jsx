import React from 'react';
import { Carousel } from 'flowbite-react';
const Corousel = () => {

    const divStyle = {
        backgroundImage: `https://caribintertrans.com/assets/uploads/emigreren-bonaire-1500x400.jpg`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        /* Other styles you might want to apply */
      };

  return (
    <div>
        <div className="h-56 sm:h-96 ">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={divStyle}>
          <img src="https://caribintertrans.com/assets/uploads/emigreren-bonaire-1500x400.jpg" alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/37/2023/03/27031715/Exterior_2-1-1500x400.jpg" alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/274/2022/09/07050027/Mercure-Rayong-Resort.jpg" alt="" />
        </div>
      </Carousel>
    </div>
    </div>
  )
}

export default Corousel