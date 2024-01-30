import React, { useEffect } from "react"
import Headerbar from "../../../../components/Body/Details/Header/Headerbar";
import DetailSlide from "../../../../components/Body/Details/Detailslide/DetailSlide";
import Navbars from "../../../../components/Header/navbar/Navbar";
import Footers from "../../../../components/Footer/Footers";
import Exteriorgallery from "../../../../components/Body/Details/Detailgallery/Exteriorgallery";

const ExteriorDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<Navbars/>
<Headerbar name="Exterior Designs" img="https://i.pinimg.com/originals/64/41/b9/6441b994edbd71f2754c17fb733af948.jpg"/>
<DetailSlide heading="EXTERIOR DESIGN: IT IS A MATTER OF PROPORTIONS." description="Are you thinking on the lines of transforming the exterior of your home or business? Well, if that is the case, then you need to confide in our Exterior home designs. There is no denying the fact that we have massive experience when it comes to Exterior Design in Karachi. We can guarantee that Style Your Space will not let you down.

When you hire us for exterior design services, then we will ensure that we help you visualize the entire transformation with full colour rendering. You can depend upon our designers and consultants. They will help you understand the benefit of each of the building material. They will also go the extra mile to assist you in coordinating components to achieve the perfect look and a lasting performance as well.

We discuss every aspect of the project with our clients. Our objective is to perceive the right perception regarding your personal style. We understand that budget and timing are crucial considerations in this regard and have a role to play in creating your perfect space." img1= "https://www.styleyourspace.pk/images/services/service-single/exterior-design.jpg" img2="https://www.styleyourspace.pk/images/services/service-single/design-5.jpg" img3="https://amazingarchitecture.com/storage/1488/moder_house_night_illumination.jpg"/>
<Exteriorgallery/>
<Footers/>
</>
  )
}

export default ExteriorDetails;