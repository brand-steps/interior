import React from 'react'
import Home from '../HOme/Home'
import Second from '../Corporate/SecondSec/Second'
import ContactMiddle from './ContactMiddle/ContactMiddle'
import Footer from '../Foooter/Footer'
const Contact = () => {
  return (
    <div>
<Home/>
<Second  name="Contact Us" text="Home  >   Contact"/>
<ContactMiddle/>
<Footer/>
    </div>
  )
}

export default Contact