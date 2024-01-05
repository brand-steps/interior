import React from 'react'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import Footers from '../../../../../Components/Footer/Footers'
import { useEffect } from 'react'
import OthersHeader from '../../../../../Components/Body/Categorycomponents/Otherscomponent/Othersheader/OthersHeader'
import OthersProducts from '../../../../../Components/Body/Categorycomponents/Otherscomponent/Othersproduct/OthersProducts'

const OthersPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
   <>
   <Navbars/>
   <OthersHeader/>
   <OthersProducts/>
   <Footers/>
   </>

  )
}

export default OthersPage