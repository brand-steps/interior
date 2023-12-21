import React from 'react'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import Footers from '../../../../../Components/Footer/Footers'
import { useEffect } from 'react'
import FurnitureHeader from '../../../../../Components/Body/Categorycomponents/Furniturecomponent/Furnitureheader/FurnitureHeader'
import FurnitureType from '../../../../../Components/Body/Categorycomponents/Furniturecomponent/Furnituretype/FurnitureType'
import FurnitureProduct from '../../../../../Components/Body/Categorycomponents/Furniturecomponent/Furnitureproduct/FurnitureProduct'

const FurniturePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

   <>
   <Navbars/>
<FurnitureHeader/>
<FurnitureType/>
<FurnitureProduct/>
   <Footers/>
   </>

  )
}

export default FurniturePage