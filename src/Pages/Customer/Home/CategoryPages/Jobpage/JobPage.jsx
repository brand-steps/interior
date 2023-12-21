import React from 'react'
import Navbars from '../../../../../Components/Header/Navbar/Navbar'
import Footers from '../../../../../Components/Footer/Footers'
import { useEffect } from 'react'
import JobHeader from '../../../../../Components/Body/Categorycomponents/Jobcomponent/Jobheader/JobHeader'
import JobType from '../../../../../Components/Body/Categorycomponents/Jobcomponent/Jobtype/JobType'
import JobProduct from '../../../../../Components/Body/Categorycomponents/Jobcomponent/Jobproduct/JobProdcut'

const JobPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
<JobHeader/>
<JobType/>
<JobProduct/>
   <Footers/>
   </>

  )
}

export default JobPage