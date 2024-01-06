import React, { useEffect } from "react"
import Navbars from "../../../Components/Header/Navbar/Navbar";
import Footers from "../../../Components/Footer/Footers";

const Privacy = () => {

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

<>
<Navbars/>
<div>
    <h1 className="font-bold text-4xl text-black mx-6 my-6">Our Privacy Policy</h1>
</div>
<div className="mt-10 ml-12 mr-6 mb-6">
<p> At listit.pk, we are committed to safeguarding the privacy of our users. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our platform.
</p>
<h1 className="font-bold text-2xl text-black mx-6 my-6">Information We Collect</h1>
<p> <span className="font-bold">User Registration: </span> When you sign up for an account on ListIt.pk, we collect your name, email address, and other necessary information to create and manage your account.</p>
<p> <span className="font-bold">Product Listings: </span> Information provided while creating product listings, including images, descriptions, and other relevant details, is stored on our platform.</p>
<p> <span className="font-bold">Communication: </span> We may collect information when you communicate with us through emails, messages, or other channels.</p>
<p> <span className="font-bold">Cookies and Analytics: </span>We use cookies and analytics tools to gather information about your usage patterns, preferences, and interactions with our platform to enhance user experience.</p>
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

<Footers/>
</>

  )
}

export default Privacy;