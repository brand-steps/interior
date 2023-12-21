import React from 'react'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import Footers from '../../../../../Components/Footer/Footers'
import { useEffect } from 'react'
import HealthHeader from '../../../../../Components/Body/Categorycomponents/Healthcomponent/Healthheader/HealthHeader'
import HealthType from '../../../../../Components/Body/Categorycomponents/Healthcomponent/Healthtype/HealthType'
import HealthProduct from '../../../../../Components/Body/Categorycomponents/Healthcomponent/Healthproduct/HealthProduct'

const HealthPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
   <HealthHeader/>
   <HealthType/>
   <HealthProduct/>
   <Footers/>
   </>

  )
}

export default HealthPage