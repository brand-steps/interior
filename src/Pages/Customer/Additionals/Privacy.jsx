import React, { useEffect } from "react"
import Navbars from "../../../Components/Header/Navbar/Navbar";
import Footers from "../../../Components/Footer/Footers";
import { useNavigate } from "react-router-dom";

const Privacy = () => {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    
    padding: '20px',
    //border: '1px solid #ccc',
    //borderRadius: '8px',
    //boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    //border: '1px solid #ccc',
    //borderRadius: '8px',
    //boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '900px', // Adjust the width as needed
    //justifyContent: 'center', background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };


      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

<>
<Navbars/>
<div>
    <h1 className="font-bold text-center text-4xl text-black mx-6 my-8">Our Privacy Policy</h1>
</div>
<div className='flex  justify-evenly flex-wrap mb-6' >
      
      <div style={containerStyle}>
        <h1 className='mb-6 font-bold text-xl'>Articles In This Section </h1>
        <ol style={{ listStyleType: 'decimal' }}>
                    <li className="font-semibold mb-2 text-base">Information We Collect </li>
                    <li className="font-semibold mb-2 text-base">How We Use Your Information </li>
                    <li className="font-semibold mb-2 text-base">Information Sharing </li>
                    <li className="font-semibold mb-2 text-base">Data Security </li>
                    <li className="font-semibold mb-2 text-base">Your Choices </li>
                    <li className="font-semibold mb-2 text-base">Changes to the Privacy Policy </li>
                    <li  className="font-semibold mb-2 text-base"> Contact Us</li>
                </ol>
      </div>
      <div style={containerStyle2} className="bg-slate-100 rounded-xl">
        <p className=""> At listit.pk, we are committed to safeguarding the privacy of our users. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our platform.
</p>      
<div>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Information We Collect</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li><span className="font-bold">User Registration: </span> When you sign up for an account on ListIt.pk, we collect your name, email address, and other necessary information to create and manage your account.</li>
                    <li> <span className="font-bold">Product Listings: </span> Information provided while creating product listings, including images, descriptions, and other relevant details, is stored on our platform.</li>
                    <li><span className="font-bold">Communication: </span> We may collect information when you communicate with us through emails, messages, or other channels.</li>
                    <li><span className="font-bold">Cookies and Analytics: </span>We use cookies and analytics tools to gather information about your usage patterns, preferences, and interactions with our platform to enhance user experience.</li>
                </ul>
</div>
<div>
<h1 className="font-bold text-2xl text-black mx-6 my-6">How We Use Your Information</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li><span className="font-bold">Platform Operation: </span> We use the information you provide to operate and maintain listit.pk, including managing user accounts, processing transactions, and improving platform features.</li>
                    <li><span className="font-bold">Communication: </span>  Your contact information may be used to communicate with you regarding your account, transactions, and platform updates.</li>
                    <li><span className="font-bold">Personalization </span> We may use collected data to personalize your experience on ListIt.pk, providing tailored content and recommendations.</li>
                    <li> <span className="font-bold">Analytics: </span> Data collected through cookies and analytics tools helps us understand user behavior and preferences, allowing us to enhance our platform and services.</li>
                </ul>

                </div>
                <div>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Information Sharing</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li><span className="font-bold">Public Listings: </span>  Information provided in public listings, such as product details and seller information, may be visible to other users on the platform.</li>
                    <li><span className="font-bold">Third-Party Services: </span>  We may use third-party services to facilitate platform operations and analytics. These service providers are bound by confidentiality agreements and are prohibited from using your information for other purposes.</li>
                </ul>

                </div>
                <div>
                <h1 className="font-bold text-2xl text-black mx-6 my-6">Data Security</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no method of data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</li>
                </ul>
                </div>
                <div>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Your Choices</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>You have the right to access, correct, or delete your personal information. You can manage your account settings, update product listings, and control communication preferences through your ListIt.pk account.</li>
                </ul>

                </div>
                <div>
                <h1 className="font-bold text-2xl text-black mx-6 my-6">Changes to the Privacy Policy</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>listit.pk reserves the right to update and modify this Privacy Policy. Any changes will be reflected on this page, and users will be notified of significant updates.</li>
                </ul>
                </div>

                <div>
                <h1 id="contact" className="font-bold text-2xl text-black mx-6 my-6">Contact Us</h1>
                <ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li>If you have any questions or concerns regarding our Privacy Policy, please contact us at info@listit.pk.</li>
                </ul>
                </div>

</div>
    </div>
    {/*}
<div className="mt-10 ml-12 text-lg mr-10 mb-6">
  
<p className=""> At listit.pk, we are committed to safeguarding the privacy of our users. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our platform.
</p>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Information We Collect</h1>
<ul style={{ listStyleType: 'disc' }} className="ml-12">
                    <li><span className="font-bold">User Registration: </span> When you sign up for an account on ListIt.pk, we collect your name, email address, and other necessary information to create and manage your account.</li>
                    <li> <span className="font-bold">Product Listings: </span> Information provided while creating product listings, including images, descriptions, and other relevant details, is stored on our platform.</li>
                    <li><span className="font-bold">Communication: </span> We may collect information when you communicate with us through emails, messages, or other channels.</li>
                    <li><span className="font-bold">Cookies and Analytics: </span>We use cookies and analytics tools to gather information about your usage patterns, preferences, and interactions with our platform to enhance user experience.</li>
                </ul>
<p> </p>
<p></p>
<p> </p>
<p> </p>
<h1 className="font-bold text-2xl text-black mx-6 my-6">How We Use Your Information</h1>
<p> <span className="font-bold">Platform Operation: </span> We use the information you provide to operate and maintain listit.pk, including managing user accounts, processing transactions, and improving platform features.</p>
<p> <span className="font-bold">Communication: </span>  Your contact information may be used to communicate with you regarding your account, transactions, and platform updates.</p>
<p> <span className="font-bold">Personalization </span> We may use collected data to personalize your experience on ListIt.pk, providing tailored content and recommendations.</p>
<p> <span className="font-bold">Analytics: </span> Data collected through cookies and analytics tools helps us understand user behavior and preferences, allowing us to enhance our platform and services.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">Information Sharing</h1>
<p> <span className="font-bold">Public Listings: </span>  Information provided in public listings, such as product details and seller information, may be visible to other users on the platform.</p>
<p> <span className="font-bold">Third-Party Services: </span>  We may use third-party services to facilitate platform operations and analytics. These service providers are bound by confidentiality agreements and are prohibited from using your information for other purposes.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">Data Security</h1>

<p>We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no method of data transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Your Choices</h1>

<p>You have the right to access, correct, or delete your personal information. You can manage your account settings, update product listings, and control communication preferences through your ListIt.pk account.</p>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Changes to the Privacy Policy</h1>
<p>listit.pk reserves the right to update and modify this Privacy Policy. Any changes will be reflected on this page, and users will be notified of significant updates.</p>

<h1 className="font-bold text-2xl text-black mx-6 my-6">Contact Us</h1>
<p>If you have any questions or concerns regarding our Privacy Policy, please contact us at info@listit.pk.</p>

</div>
  */}
<Footers/>
</>

  )
}

export default Privacy;