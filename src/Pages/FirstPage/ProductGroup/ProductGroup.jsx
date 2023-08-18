import React from 'react'

const ProductGroup = () => {
  return (

    <div className='ml-4 md:ml-24 p-4'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-4xl font-bold'>Product Group</div>
  <p className='text-base md:text-xl p-2 md:p-4'>Years of Experience...</p>

  <div className='w-full md:w-72' style={{ "border": "1px solid red" }}>
    {/* Content for the inner div */}
  </div>
</div>



  )
}

export default ProductGroup