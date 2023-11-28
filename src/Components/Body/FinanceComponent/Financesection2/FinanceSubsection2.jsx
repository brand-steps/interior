import React from 'react';
import img1 from '../../../../Assests/finance1.webp'
const FinanceSubsection2 = () => {



  const divStyle = {
    backgroundColor: '#010203'
    /* Other styles you might want to apply */
  };
let imageurl = "https://freerangestock.com/sample/129502/black-car-.jpg"
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
marginBottom: "30px",
marginTop: '20px',
    borderRadius: '8px',
    width: '650px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '600px',
    height: '400px',
    marginBottom: '16px',
  };

  const textcolor = {
    color: '#E5A317',

  };

  return (
    <div className='flex  justify-evenly flex-wrap my-4' style={divStyle}>
              <div style={containerStyle}>
        <img src="https://st.depositphotos.com/1041766/1286/i/450/depositphotos_12867028-stock-photo-black-car.jpg" alt="Fairs" style={imageStyle} />

      </div>
      <div style={containerStyle}>
        <h1 className='text-xl font-bold mb-3' style={textcolor}>Why Choose finance arranged by us?</h1>
        <p className='text-lg'><span className='font-bold' style={textcolor}>Wide Range of Financing Options:</span> We work with a panel of reputable lenders 'direct to dealer', providing you with a diverse range of car finance options. Whether you're looking for a PCP, HP, or LP we're here to help.</p>
        <p className='text-lg mt-2'><span className='font-bold' style={textcolor}>Competitive Interest Rates:</span>Our team is committed to securing the most competitive interest rates for our customers. We regularly negotiate with our lending partners on your behalf, ensuring you get the best possible deal.</p>
        <p className='text-lg mt-2'><span className='font-bold' style={textcolor}>Personalised Guidance:</span>Every individual's financial situation is unique, and we treat it that way. Your salesperson will work closely with you to understand your needs and tailor a car finance plan that aligns with your budget and preferences.</p>
        <p className='text-lg mt-2'><span className='font-bold' style={textcolor}>No Hidden Fees:</span>At Stafford, transparency is paramount. You can trust that we will provide you with all the information about your loan upfront. There are no fees for financial services, however, as with all vehicle dealerships we may receive a commission for introducing the transaction to the lender.</p>

      </div>




      
    </div>
  );
}

export default FinanceSubsection2;
