import React from 'react'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import Footers from '../../../../../Components/Footer/Footers'
import FashionHeader from '../../../../../Components/Body/Categorycomponents/Fashioncomponents/Fashionheader/FashionHeader'
import FashionType from '../../../../../Components/Body/Categorycomponents/Fashioncomponents/Fashiontype/FashionType'
import FashionProduct from '../../../../../Components/Body/Categorycomponents/Fashioncomponents/Fashionproduct/FashionProduct'
import { useEffect } from 'react'

const FashionPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
   <>
   <Navbars/>
<FashionHeader/>
<FashionType/>
<FashionProduct/>
   <Footers/>
   </>

  )
}

export default FashionPage