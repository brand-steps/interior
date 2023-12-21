import React from 'react'
import { useEffect } from 'react'
import Navbars from '../../../Components/Header/Navbar/Navbar'
import Footers from '../../../Components/Footer/Footers'
import './registeruser.css'
import RegisterHeader from '../../../Components/Body/registercomponent/Registerheader/RegisterHeader'
import RegisterForm from '../../../Components/Body/registercomponent/Registerform/RegisterForm'

const RegisterUser = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
  <RegisterHeader/>
  <RegisterForm/>
   <Footers/>
   </>

  )
}

export default RegisterUser