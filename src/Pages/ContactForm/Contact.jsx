import React from 'react'
import Home from '../HOme/Home'
import Second from '../Corporate/SecondSec/Second'
import ContactMiddle from './ContactMiddle/ContactMiddle'
import Footer from '../Foooter/Footer'
const Contact = () => {
  return (
    <div>
<Home/>
<Second  name="OUR DOCUMENTS" text="Home  > Corporate >  Our Documents"/>
<ContactMiddle/>
<Footer/>
    </div>
  )
}

export default Contact