import React from 'react';
import Sidebaruser from './sidebarUser';
import { Link, useNavigate } from 'react-router-dom';
import './Allproduct.css';

function UserDashboard() {
  const navigate = useNavigate();
  const divStyle = {
    backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20190331/pngtree-vector-white-abstract-background-design-templates-collection-wit-image_94438.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '16px',
  };

  const buttonStyle = {
    background: '#28231d',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  return (
      <div>
        <Sidebaruser />
        
        <div className='flex  justify-evenly flex-wrap my-4 topdiv' style={divStyle}>
        <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/4129/4129437.png" alt="Fairs" style={imageStyle} />
        <h1>VIEW PRODUCTS</h1>
        <p>You can view your products and can edit or delete according to your choice</p>
<button onClick={() =>{navigate("/Allproduct")}} style={buttonStyle}>View</button>
      </div>

      <div style={containerStyle}>
        <img src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" alt="Fairs" style={imageStyle} />
        <h1>PROFILE</h1>
        <p>You can view the details of the Your Profile that you have set during signing up</p>
<button onClick={() =>{navigate("/Profile")}} style={buttonStyle}>View</button>
      </div>

      <div style={containerStyle}>
        <img src="https://static.thenounproject.com/png/3658249-200.png" alt="Fairs" style={imageStyle} />
        <h1>ADD PRODUCT</h1>
        <p>You can upload your products and wait for the admin to approve it</p>
<button onClick={() =>{navigate("/AddProduct/user")}} style={buttonStyle}>View</button>
      </div>



      
    </div>
      </div>
  );
}

export default UserDashboard;
