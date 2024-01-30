import React from 'react';
import Headerbar from '../../components/Body/Details/Header/Headerbar';
import OfficialGallery from '../../components/Body/Details/Detailgallery/OfficialGallery';
import Footers from '../../components/Footer/Footers';
import Navbars from '../../components/Header/navbar/Navbar';

const Gallery = () => {

  return (
    <div>
        <Navbars/>
        <Headerbar name="Our Album" img="https://www.feeta.pk/blog/wp-content/uploads/2022/04/How-To-Relish-The-Richness-Of-Dark-Interior-Design-1.jpg"/>
    <OfficialGallery/>
    <Footers/>
    </div>
  )
}

export default Gallery