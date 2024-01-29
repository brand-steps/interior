import React from 'react';

const Section1 = () => {



  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',

    width: '600px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '500px',
    height: '700px',
    marginBottom: '16px',
  };



  return (
    <div className='flex  justify-evenly flex-wrap my-12'>
             <div style={containerStyle}>
        <img src="https://static.tekce.com/files/sayfalar/img/tekce-anasayfa-gorsel-400x700-02-01.jpg" alt="Fairs" style={imageStyle} />
      </div>
      <div style={containerStyle}>
        <h1 className='font-extrabold text-5xl mb-6 mt-16 text-amber-400 '>WELCOME TO </h1>
        <h1 className='font-extrabold text-4xl mb-6 mt-3 '>Interior Designing Website </h1>

        <p className='mt-6 mb-6'>We are a reputed firm providing construction and interior design services. We hold expertise in creating designs that can offer value to our customers. Our interior design can truly elevate the spirit as well. Our team strives to come up with the best energy and money saving techniques.
</p>
<h1 className='font-bold my-4'>Restaurant, showroom, office, shopping malls and interior design are our forte.</h1>
<p>We are located in Karachi among best interior design companies. If you want to give your ideas a realistic perception, then we are the right people to contact. We are a team that does not believe in compromising on quality. Our team believes in thinking out of the box and we go the extra mile to achieve our objectives.</p>
      </div>
 
  
    </div>
  );
}

export default Section1;
