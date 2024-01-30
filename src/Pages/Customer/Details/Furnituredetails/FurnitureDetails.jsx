import React, { useEffect } from "react"
import Headerbar from "../../../../components/Body/Details/Header/Headerbar";
import DetailSlide from "../../../../components/Body/Details/Detailslide/DetailSlide";
import Navbars from "../../../../components/Header/navbar/Navbar";
import Footers from "../../../../components/Footer/Footers";
import Exteriorgallery from "../../../../components/Body/Details/Detailgallery/Exteriorgallery";
import FurniGallery from "../../../../components/Body/Details/Detailgallery/FurniGallery";

const FurnitureDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<Navbars/>
<Headerbar name="Custom Furniture" img="https://obsessionoutlet.com/wp-content/uploads/bridal-furniture-designs.jpg"/>
<DetailSlide heading="FURNITURE SHOWROOM: IN A MODERN LOFT, YOU CAN'T JUST FILL A SPACE WITH FURNITURE. EACH PIECE HAS TO BE PERFECT." description="If you are looking forward to buying furniture that will spell bound the onlookers, then you have got to have a peep inside our Furniture showroom in Karachi. We can create mesmerizing furniture that will add this dream look to your house. At the same time we have the ability and skill to come up with office furniture also that adds up a professional look to your office." img1= "https://img.freepik.com/premium-photo/interior-design-bedroom-with-walls-dark-tone-generative-ai_62294-518.jpg" img2="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/321945737/original/f7b06e90e32fc6b2cb76364cd942cbef3faa22ca/design-and-render-your-dream-interior-space.jpeg" img3="https://static.wixstatic.com/media/bf8702_6628f97c1e3c4690938b239e6274c43f~mv2.jpg/v1/fill/w_738,h_511,al_c,q_85,enc_auto/bf8702_6628f97c1e3c4690938b239e6274c43f~mv2.jpg"/>
<FurniGallery/>
<Footers/>
</>
  )
}

export default FurnitureDetails;