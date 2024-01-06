import React from "react"
import aboutbanner from '../../../Assets/aboutbanner2.jpg'
import Navbars from "../../../Components/Header/Navbar/Navbar";
import Footers from "../../../Components/Footer/Footers";

const AboutUs = () => {
    const divStyle = {
        backgroundImage: `url(${aboutbanner})`,
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
        
        paddingBottom: '50px',
        paddingTop: '50px'

        //height: '250px', background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
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

      const containerStyle2 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '12px',

        width: '650px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    
      const imageStyle2 = {
        width: '80px',
        height: '80px',
        marginBottom: '16px',
      };
    
      const buttonStyle2 = {
        background: '#EC0C36',
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        borderRadius: '8px',
        marginTop: '12px',
        cursor: 'pointer',
      };
  return (
    <>
    <Navbars/>
    <div className='flex  justify-evenly flex-wrap my-4 ' style={divStyle}>
      <div style={containerStyle} className="text-white">
        <h1 className="text-6xl font-extrabold opacity-100">About Us</h1>
<p className="font-bold text-xl mb-2">Welcome to listit.pk – Your Gateway to Free Product Listings!</p>
      <p className="font-bold text-lg">At listit.pk, we believe in empowering businesses of all sizes by providing a platform where they can showcase their products to a broader audience without any cost. Our mission is to create a dynamic online marketplace that fosters growth, connectivity, and opportunities for entrepreneurs, startups, and established businesses alike.</p>
      </div>
  
    </div>
    <div className='flex  justify-center flex-wrap my-4' >
      <div style={containerStyle2}>
      <h1 className="font-bold text-6xl text-violet-500 mx-6 my-6">Who We Are</h1>

      </div>
      <div style={containerStyle2}>
        <p className="text-black text-lg mx-6 my-6">listit.pk is more than just a platform; it's a community-driven initiative designed to simplify the process of product listing. Founded with a vision to bridge the gap between sellers and potential buyers, we offer a user-friendly interface that allows businesses to list their products seamlessly and reach a diverse audience.</p>
      </div>

    </div>
    <div className='flex  justify-center flex-wrap my-4' >
      <div style={containerStyle2}>

      <h1 className="font-bold text-6xl text-teal-600 mx-6 my-6">Our Devotion</h1>

      </div>
      <div style={containerStyle2}>
      <p className="text-black text-lg mx-6 my-6">Our commitment is simple – to make product listing accessible to everyone. Whether you are a budding entrepreneur with a unique product or an established business looking to expand your reach, ListIt.pk is here to support you. We believe that every product has a story to tell, and we aim to be the platform where those stories unfold.</p>

      </div>

    </div>
    <div className='flex  justify-center flex-wrap my-4' >
      <div style={containerStyle2}>

      <h1 className="font-bold text-6xl text-violet-500 mx-6 my-6">What Sets Us Apart</h1>

      </div>
      <div style={containerStyle2}>
      <p className="text-black text-lg mx-6 my-6">we understand the importance of minimizing costs for businesses. That's why we offer free product listings, ensuring that your budget remains focused on growing your business. Our intuitive platform is designed to be user-friendly, allowing businesses to effortlessly list their products and manage their online presence with ease. From fashion and electronics to home decor and more, ListIt.pk covers a wide range of categories. This diversity ensures that your products find their niche in the market.
</p>

      </div>

    </div>

    <div className='flex  justify-center flex-wrap my-4' >
      <div style={containerStyle2}>

      <h1 className="font-bold text-6xl text-teal-600 mx-6 my-6">How It Works</h1>

      </div>
      <div style={containerStyle2}>
      <p className="text-black text-lg mx-6 my-6">Create an account on listit.pk to get started. It's quick, easy, and free! Showcase your products by creating listings that highlight their unique features and benefits. Reach potential customers and build connections within our growing community.  Leverage the power of ListIt.pk to expand your business, increase visibility, and drive sales.</p>

      </div>

    </div>
    <Footers/>
    </>
  )
}

export default AboutUs;