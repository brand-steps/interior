import React from "react"
import fyrnaturehead from '../../../../../Assets/fyrniturehead.jpg'

const FurnitureHeader = () => {
    const divStyle = {
        backgroundImage: `url(${fyrnaturehead})`,
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
        height: '250px',
        paddingBottom: '100px'
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    
    
  return (
    <div className='flex  justify-evenly flex-wrap my-4' style={divStyle}>
      <div style={containerStyle} className="text-white">
        <h1 className="text-6xl font-extrabold opacity-100">Furniture</h1>

      </div>
      
    </div>
  )
}

export default FurnitureHeader;