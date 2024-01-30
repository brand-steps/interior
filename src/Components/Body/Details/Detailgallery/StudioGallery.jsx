import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';


const StudioGallery = () => {
const [hover, sethover] = useState(false)
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const divStyle = {
  backgroundImage: `url('https://foyr.com/learn/wp-content/uploads/2021/10/rules-for-interior-designers.png')`,
  /* Other styles you might want to apply */
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px', // Adjust the width as needed

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '390px',
    height: '200px',
    marginBottom: '16px',
  };



  return (
    <>


    <div >
        <div className='ml-4 md:ml-16 p-4 '>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl text-center md:text-3xl font-bold mt-6'>Some Glimpse of 3D Studio Projects </div>

 {/* <div className='w-full md:w-72 text-center' style={{ "border": "1px solid red" }}>
     Content for the inner div 
  </div>*/}
</div>
    <div className='flex  justify-evenly  flex-wrap my-4 pt-12 py-16' >
    <div onClick={handleClickOpen} style={containerStyle} className=' hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>
<Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        
      >
          <Toolbar className='bg-amber-400'>
            <IconButton
              edge="start"
              color="black"
              onClick={handleClose}
              aria-label="close"
            >
              Back
            </IconButton>


          </Toolbar>
          <img className='h-full w-full' src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" />


      </Dialog>
<div style={containerStyle} className=' hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>
<div style={containerStyle} className=' hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>
<div style={containerStyle} className=' hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>

<div style={containerStyle} className=' hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>
<div style={containerStyle} className=' hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="img" style={imageStyle} />
</div>

      </div>
      </div>
    </>
  );
}

export default StudioGallery;
