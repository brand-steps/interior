import React from 'react';
import Navbarhead from '../../../components/Header/navbar/Navbar';
import Corousel from '../../../components/Body/Corousel/Corousels';
import Corousel2 from '../../../components/Body/Corousel/Corousel2';
import Section1 from '../../../components/Body/Section1/Section1';
import Section2 from '../../../components/Body/Section2/Section2';
import Section3 from '../../../components/Body/Section3/Section3';
import Footers from '../../../components/Footer/Footers';

const HomePage = () => {
  return (
    <div>
        <Navbarhead/>
        <Corousel/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footers/>
    </div>
  )
}

export default HomePage