import React from 'react';
import Navbars from '../../components/Header/navbar/Navbar';
import Corousel2 from '../../components/Body/Corousel/Corousel2';
import Section1 from '../../components/Body/Section1/Section1';
import Section2 from '../../components/Body/Section2/Section2';
import Section3 from '../../components/Body/Section3/Section3';
import Footers from '../../components/Footer/Footers';
import Navbars2 from '../../components/Header/navbar/Navbar2';

const HomePg = () => {
  const containerStyle = {
 // Adjust the width as needed
    Animation:""
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  return (
    <div>
        <Navbars/>

        <Corousel2/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footers/>
    </div>
  )
}

export default HomePg