import React from 'react'
import { useEffect } from 'react'
import Navbars from '../../../Components/Header/Navbar/Navbar'
import Footers from '../../../Components/Footer/Footers'
import UserListHeader from '../../../Components/Body/Userlistcomponent/Userlistheader/UserListHeader'
import UserListProduct from '../../../Components/Body/Userlistcomponent/Userlistproduct/UserListProduct'

const UserListDisplay = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
   <UserListHeader/>
   <UserListProduct/>
   <Footers/>
   </>

  )
}

export default UserListDisplay