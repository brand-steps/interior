import React from 'react';
import logo from '../../Images/equipment suppliers logo mini.png';
import CompanyLogo from '../../Images/bs logo.png'


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-1">
            <h1 className="footer__logo mb-4"><img src={logo} alt="Logo" /></h1>
            <p className="text-sm">
              Industrial kitchen equipment: It is the equipment that enables the work of enterprises such as restaurants, hotels, hospitals, factories and schools where large amounts of food production is carried out.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">Corporate</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Vision</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Our Documents</a></li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">Product Groups</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li><a href="#">Dough Kneading Machine</a></li>
              <li><a href="#">Blender/Mikser</a></li>
              <li><a href="#"> Professional Dough Kneading </a></li>
              <li><a href="#">  Oven</a></li>
              <li><a href="#">   OVERTURN DOUGH KNEADI</a></li>
              {/* ... other items ... */}
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li className="font-bold">
                Phone <br />
                01273 569355
              </li>
              <li className="font-bold">
                E Mail <br />
                Info@equipmentsuppliers.co.uk
              </li>
              <li className="font-bold">
                Address <br />
                Unit 19 Beach Cl, Newhaven BN9 0BY
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-2'>
  <hr className='w-4/5 sm:w-3/5 border border-gray-300' />
</div>


      <div className="flex justify-center items-center pt-4">
            <div className="text-sm text-white">
                &copy; 2023 BrandSteps . All rights reserved.
            </div>
        </div>

    </footer>
  );
}

export default Footer;
