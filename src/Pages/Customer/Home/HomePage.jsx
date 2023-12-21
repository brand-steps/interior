import React from 'react';
import './homepage.css';
import Navbars from '../../../Components/Header/Navbar/Navbar';
import Corosel from '../../../Components/Body/Home/Couroselslider/Corosel';
import CategoryHead from '../../../Components/Body/Home/CategoryHead/CategoryHead';
import HomeCategory from '../../../Components/Body/Home/Homecategory/HomeCategory';
import NewListing from '../../../Components/Body/Home/Listings/Newlisting/NewListing';
import Listingheading from '../../../Components/Body/Home/CategoryHead/Listingheading';
import BestListHeading from '../../../Components/Body/Home/CategoryHead/BestListHeading';
import BestListingSlider from '../../../Components/Body/Home/Listings/BestListingslider/BestListingSlider';
import PropertyHeading from '../../../Components/Body/Home/CategoryHead/PropertyHeading';
import PropertySlider from '../../../Components/Body/Home/Listings/PropertySlider/PropertySlider';
import Footers from '../../../Components/Footer/Footers';
import FashionHeading from '../../../Components/Body/Home/CategoryHead/FashionHeading';
import FashionSlider from '../../../Components/Body/Home/Listings/Fashionlisting/FashionSlider';
import JobHeading from '../../../Components/Body/Home/CategoryHead/JobHeading';
import ServiceHeading from '../../../Components/Body/Home/CategoryHead/ServiceHeading';
import ServiceSlider from '../../../Components/Body/Home/Listings/ServiceListing/ServiceSlider';
import JobSlider from '../../../Components/Body/Home/Listings/JobSlider/JobSlider';
import FurnitureHeading from '../../../Components/Body/Home/CategoryHead/FurnitureHeading';
import HealthHeading from '../../../Components/Body/Home/CategoryHead/HealthHeading';
import EventHeading from '../../../Components/Body/Home/CategoryHead/EventHeading';
import BeautyHeading from '../../../Components/Body/Home/CategoryHead/BeautyHeading';
import FurnitureSlider from '../../../Components/Body/Home/Listings/FurnitureListing/FurnitureSlider';
import HealthSlider from '../../../Components/Body/Home/Listings/Healthlisting/HealthSlider';
import EventSlider from '../../../Components/Body/Home/Listings/Eventlisting/EventSlider';
import BeautySlider from '../../../Components/Body/Home/Listings/Beautylisting/BeautySlider';

const HomePage = () => {
  return (
    <div>
      
<Navbars/>
<Corosel/>
<CategoryHead/>
<HomeCategory/>
<Listingheading/>
<NewListing/>
<BestListHeading/>
<BestListingSlider/>
<PropertyHeading/>
<PropertySlider/>
<FashionHeading/>
<FashionSlider/>
<JobHeading/>
<JobSlider/>
<ServiceHeading/>
<ServiceSlider/>
<FurnitureHeading/>
<FurnitureSlider/>
<HealthHeading/>
<HealthSlider/>
<EventHeading/>
<EventSlider/>
<BeautyHeading/>
<BeautySlider/>
<Footers/>
    </div>
  )
}

export default HomePage