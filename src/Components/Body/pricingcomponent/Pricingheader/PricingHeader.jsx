import React from "react"
import pricinghead2 from '../../../../Assets/pricinghead2.jpg'

const PricingHeader = () => {
    const divStyle = {
        backgroundImage: `url(${pricinghead2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        /* Other styles you might want to apply */
      };
    
      const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        width: '1000px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    
      const imageStyle = {
        width: '100px',
        height: '900px',
        marginBottom: '16px',
      };
    
      const buttonStyle = {
        background: '#EC0C36',
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        borderRadius: '8px',
        marginTop: '12px',
        cursor: 'pointer',
      };
  return (
    <div className='flex  justify-evenly flex-wrap my-4' style={divStyle}>
      <div style={containerStyle} className="text-white mb-8">
        <h1 className="text-6xl font-extrabold opacity-100">Our Pricing</h1>
        <p className="text-lg font-normal opacity-100 mt-4">You will find out that your business is growing as a direct result of your relationship with Pakistan Business Directory. We offer an integrated approach to online marketing for businesses in Pakistan. The website allows visitors to review and recommend businesses and products that they have used.</p>

      </div>




      
    </div>
  )
}

export default PricingHeader;