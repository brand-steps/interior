import React from 'react'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import Footers from '../../../../../Components/Footer/Footers'
import { useEffect } from 'react'
import EventHeader from '../../../../../Components/Body/Categorycomponents/Eventcomponent/Eventheader/EventHeader'
import EventType from '../../../../../Components/Body/Categorycomponents/Eventcomponent/Eventtype/EventType'
import EventProduct from '../../../../../Components/Body/Categorycomponents/Eventcomponent/Eventproduct/EventProduct'

const EventPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
   <EventHeader/>
   <EventType/>
   <EventProduct/>
   <Footers/>
   </>

  )
}

export default EventPage