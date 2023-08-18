import React from 'react'

const Second = ({name , text}) => {

    // let text = ""
  return (
<div className="bg-cover w-full h-[300px] mb-4" style={{ backgroundImage: 'url(https://www.osimo.com.tr/assets/images/headers/pages.jpg)' }}>
  <div className='flex w-full h-[300px] justify-between items-center px-4 md:px-24'>
    <h1 className='text-white text-sm md:text-xl lg:text-2xl'>{name}</h1>
    <h1 className='text-white text-sm md:text-xl lg:text-2xl'>{text}</h1>
  </div>
</div>
  )
}

export default Second