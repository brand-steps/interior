import React from 'react';
import Navbarhead from '../../../components/Header/navbar/Navbar';
import Corousel from '../../../components/Body/Corousel/Corousels';
import Corousel2 from '../../../components/Body/Corousel/Corousel2';
import Section1 from '../../../components/Body/Section1/Section1';
import Section2 from '../../../components/Body/Section2/Section2';
import Section3 from '../../../components/Body/Section3/Section3';
import Footers from '../../../components/Footer/Footers';
import Corousel3 from '../../../components/Body/Corousel/Corousel3';
import Imagetop from '../../../components/Body/Corousel/Imagetop';
import Categories from '../../../components/Body/Corousel/Categories';
import Subtypes from '../../../components/Body/Corousel/Subtypes';
import Cardss from '../../../components/Body/Corousel/Cardss';

const HomePage = () => {
  const containerStyle = {
 // Adjust the width as needed
    Animation:""
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  return (
    <div>
        <Navbarhead/>


        <Corousel2/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footers/>
    </div>
  )
}

export default HomePage