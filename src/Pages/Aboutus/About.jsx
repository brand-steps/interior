import React from 'react'
import img from '../../Images/mockups.jpg'



const About = () => {
  return (
    
    <div className='flex flex-col md:flex-row p-4 md:p-20'>
    <div className='w-full md:w-2/5'>
      <img src={img} alt="" className="w-full" />
    </div>
  
    <div className='w-full md:w-3/5 pl-0 md:pl-8'>
      <h1 className='text-3xl md:text-5xl pb-4 md:pb-8 font-bold mt-3'>ABOUT US</h1>
      <p>
        Industrial kitchen equipment: It is the equipment that enables the work of enterprises such as restaurants, hotels, hospitals, factories, and schools where large amounts of food production are carried out, consisting of stainless steel products in accordance with the rules determined in terms of health and hygiene and that the work is done quickly. Our company, which has adopted the principle of closely following the technological developments in the field of industrial kitchen equipment, aims to offer our customers quality machinery and equipment under the most economical conditions. We offer our innovative and aesthetic products to our customers and produce them, for them and market them over our country and all the world.
      </p>
      <button style={{ "background": "#EC0C36" }} className="text-white font-semibold px-4 py-2 rounded-lg mt-4">
        View All
      </button>
    </div>
  </div>
  
  


  )
}

export default About