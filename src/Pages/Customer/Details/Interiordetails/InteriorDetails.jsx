import React, { useEffect } from "react"
import Headerbar from "../../../../components/Body/Details/Header/Headerbar";
import DetailSlide from "../../../../components/Body/Details/Detailslide/DetailSlide";
import Navbars from "../../../../components/Header/navbar/Navbar";
import Footers from "../../../../components/Footer/Footers";
import DetailGallery from "../../../../components/Body/Details/Detailgallery/DetailGallery";

const InteriorDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<Navbars/>
<Headerbar name="interior Designs" img="https://dwellkraft.com/wp-content/uploads/elementor/thumbs/waal1-scaled-q96s5lxhlkmgsw00wamphnk6txfjx45bjs6wmd22lc.jpeg"/>
<DetailSlide heading="Interior Design is Thinking ... Made Visual" description="Style Your Space offers the best interior design in Karachi. We strive to live up to the expectations of our clients. Our approach is that we visualize the design plans in collaboration with our clients.

We discuss every aspect of the project with our clients. Our objective is to perceive the right perception regarding your personal style. We understand that budget and timing are crucial considerations in this regard and have a role to play in creating your perfect space." img1= "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/200/2020/03/05113013/NSEC_tahi_restaurant_thumb_01.jpg" img2="https://www.ahstatic.com/photos/b9i7_ho_01_p_1024x768.jpg" img3="https://www.peerspace.com/resources/wp-content/uploads/241265959_713283363401941_2858981632523900020_n.jpg"/>
<DetailGallery/>
<Footers/>
</>
  )
}

export default InteriorDetails;