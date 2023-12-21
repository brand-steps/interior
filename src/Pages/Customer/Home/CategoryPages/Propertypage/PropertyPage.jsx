import React from 'react'
import PropertyHeader from '../../../../../Components/Body/Categorycomponents/Propertycomponent/Propertyheader/PropertyHeader'
import PropertyType from '../../../../../Components/Body/Categorycomponents/Propertycomponent/Propertytype/PropertyType'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import PropertyProduct from '../../../../../Components/Body/Categorycomponents/Propertycomponent/PropertyProducts/PropertyProduct'
import Footers from '../../../../../Components/Footer/Footers'
import { useEffect } from 'react'

const PropertyPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

   <>
   <Navbars/>
   <PropertyHeader/>
   <PropertyType/>
   <PropertyProduct/>
   <Footers/>
   </>

  )
}

export default PropertyPage