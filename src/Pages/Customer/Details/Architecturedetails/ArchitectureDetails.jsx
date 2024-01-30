import React, { useEffect } from "react"
import Headerbar from "../../../../components/Body/Details/Header/Headerbar";
import DetailSlide from "../../../../components/Body/Details/Detailslide/DetailSlide";
import Navbars from "../../../../components/Header/navbar/Navbar";
import Footers from "../../../../components/Footer/Footers";
import Exteriorgallery from "../../../../components/Body/Details/Detailgallery/Exteriorgallery";
import Archigallery from "../../../../components/Body/Details/Detailgallery/Archigallery";

const ArchitectureDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<Navbars/>
<Headerbar name="Architecture Designs" img="https://i.redd.it/zv5bj63bdegb1.jpg"/>
<DetailSlide heading="ARCHITECTURE DESIGN IS A VISUAL ART, AND THE BUILDINGS SPEAK FOR THEMSELVES." description="We offer the perfect architecture design that is eye-catching and can be termed as a valuable solution also our team has a proactive approach and our team discusses all the intricate aspects with the client when it comes to home architecture in Karachi." img1= "https://www.styleyourspace.pk/images/services/service-single/architecture-design.jpg" img2="https://www.classicalbaths.co.uk/cdn/shop/products/CE11001MB-Charlotte-Edwards-Mayfair-1500x780mm-Small-Freestanding-Bath-with-Matt-Black-Exterior_580x.jpg?v=1615152449" img3="https://img.freepik.com/premium-photo/interior-design-bedroom-with-walls-dark-tone_62294-1125.jpg"/>
<Archigallery/>
<Footers/>
</>
  )
}

export default ArchitectureDetails;