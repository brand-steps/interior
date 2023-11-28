import React from "react"

const FinanceHeader = () => {
    const divStyle = {
        backgroundImage: "url('https://superstreet-thegame.com/assets/uploads/images/news/SuperStreet-News-JaguarXESVProject8.jpg')",
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
        width: '1100px', // Adjust the width as needed
        height: '300px',
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    
      const imageStyle = {
        width: '100px',
        height: '100px',
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
    <div className='flex  justify-evenly flex-wrap my-4 opacity-90' style={divStyle}>
      <div style={containerStyle}>
        <h1 className="text-7xl font-extrabold opacity-100">Vehicle Finance</h1>

      </div>




      
    </div>
  )
}

export default FinanceHeader;