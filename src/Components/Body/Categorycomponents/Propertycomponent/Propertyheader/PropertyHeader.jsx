import React from "react"

const PropertyHeader = () => {
    const divStyle = {
        backgroundImage: "url('https://wallpaperaccess.com/full/458308.jpg')",
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
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '1000px', // Adjust the width as needed
        height: '250px',
        paddingBottom: '100px'
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
      <div style={containerStyle} className="text-white">
        <h1 className="text-6xl font-extrabold opacity-100">Property</h1>

      </div>




      
    </div>
  )
}

export default PropertyHeader;