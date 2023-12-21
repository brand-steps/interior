import React from 'react'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import Footers from '../../../../../Components/Footer/Footers'
import ServiceHeader from '../../../../../Components/Body/Categorycomponents/Servicecomponent/Serviceheader/ServiceHeader'
import ServiceType from '../../../../../Components/Body/Categorycomponents/Servicecomponent/Servicetype/ServiceType'
import ServiceProduct from '../../../../../Components/Body/Categorycomponents/Servicecomponent/Serviceproduct/ServiceProduct'
import { useEffect } from 'react'

const ServicePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
   <ServiceHeader/>
   <ServiceType/>
   <ServiceProduct/>
   <Footers/>
   </>

  )
}

export default ServicePage