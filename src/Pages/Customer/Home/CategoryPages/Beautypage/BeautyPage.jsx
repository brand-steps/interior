import React from 'react'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import Footers from '../../../../../Components/Footer/Footers'
import { useEffect } from 'react'
import BeautyType from '../../../../../Components/Body/Categorycomponents/Beautycomponent/Beautytype/BeautyType'
import BeautyProduct from '../../../../../Components/Body/Categorycomponents/Beautycomponent/Beautyproduct/BeautyProduct'
import BeautyHeader from '../../../../../Components/Body/Categorycomponents/Beautycomponent/Beautyheader/BeautyHeader'

const BeautyPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
   <BeautyHeader/>
   <BeautyType/>
   <BeautyProduct/>
   <Footers/>
   </>

  )
}

export default BeautyPage