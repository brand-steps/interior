import React from 'react'
import Home from '../HOme/Home'
import Second from '../Corporate/SecondSec/Second'
import MiddleSec from '../Corporate/MiddleSec/MiddleSec'
import Footer from '../Foooter/Footer'
import Middlesec from './Middlesec/Middlesec'
const OurDocument = () => {
  return (
    <div>
<Home/>
<Second  name="OUR DOCUMENTS" text="Home  > Corporate >  Our Documents"/>
<Middlesec/>
<Footer/>
    </div>
  )
}

export default OurDocument