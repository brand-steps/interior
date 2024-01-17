import React, { useEffect } from 'react';
import Navbars from '../../../Components/Header/Navbar/Navbar';
import Corosel from '../../../Components/Body/Home/Couroselslider/Corosel';
import CategoryHead from '../../../Components/Body/Home/CategoryHead/CategoryHead';
import HomeCategory from '../../../Components/Body/Home/Homecategory/HomeCategory';
import BestListHeading from '../../../Components/Body/Home/CategoryHead/BestListHeading';
import BestListingSlider from '../../../Components/Body/Home/Listings/BestListingslider/BestListingSlider';
import PropertyHeading from '../../../Components/Body/Home/CategoryHead/PropertyHeading';
import PropertySlider from '../../../Components/Body/Home/Listings/PropertySlider/PropertySlider';
import FashionHeading from '../../../Components/Body/Home/CategoryHead/FashionHeading';
import FashionSlider from '../../../Components/Body/Home/Listings/Fashionlisting/FashionSlider';
import JobHeading from '../../../Components/Body/Home/CategoryHead/JobHeading';
import JobSlider from '../../../Components/Body/Home/Listings/JobSlider/JobSlider';
import ServiceHeading from '../../../Components/Body/Home/CategoryHead/ServiceHeading';
import ServiceSlider from '../../../Components/Body/Home/Listings/ServiceListing/ServiceSlider';
import FurnitureHeading from '../../../Components/Body/Home/CategoryHead/FurnitureHeading';
import FurnitureSlider from '../../../Components/Body/Home/Listings/FurnitureListing/FurnitureSlider';
import HealthHeading from '../../../Components/Body/Home/CategoryHead/HealthHeading';
import HealthSlider from '../../../Components/Body/Home/Listings/Healthlisting/HealthSlider';
import EventHeading from '../../../Components/Body/Home/CategoryHead/EventHeading';
import EventSlider from '../../../Components/Body/Home/Listings/Eventlisting/EventSlider';
import BeautyHeading from '../../../Components/Body/Home/CategoryHead/BeautyHeading';
import BeautySlider from '../../../Components/Body/Home/Listings/Beautylisting/BeautySlider';
import Footers from '../../../Components/Footer/Footers';


const Lahore = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
      
<Navbars/>
<Corosel/>
<CategoryHead/>
<HomeCategory/>

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
{/*
<Listingheading/>
  <NewListing/> */}
<Footers/>
    </div>
  )
}

export default Lahore