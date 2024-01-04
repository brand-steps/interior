import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import AdminNAvbar from '../../../Components/Header/Adminnavbar/AdminNavbar';


const EditListing = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [price, setPrice] = useState("");
    const [descryption, setDescryption] = useState("");
    const [image, setImage] = useState("");


    const fetchSingleProduct = async() => {
        const response = await axios.get(`https://nice-tan-bullfrog-slip.cyclic.app/singlelist/${id}`);
        console.log("response: ", response);
      console.log(singleproduct);
      setsingleproduct(response.data.Product);
            }

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        setsingleproduct(()=> {
            return {
                ...singleproduct, [name]: value
            }
        })

    };
    
    const handleUpload = async(ev) => {
        const file = ev.target.files(0)
        const formData = new FormData();
        formData.append("image",file);
        const response = await fetch("http://localhost:3000/upload", {
        method: "POST",    
        body: formData,
        });

    }

    const handlesubmit = async () => {
        const productData = { ...singleproduct};
        const response = await axios.put(`https://nice-tan-bullfrog-slip.cyclic.app/edittedlisting/${id}`, productData);

alert("Product Updated");
navigate('/listdisplayadmin')
    }
    

    useEffect (()=> {
        fetchSingleProduct()

    },[]);
    return (
        <>
        <AdminNAvbar/>
        <h1 className='text-3xl font-bold text-black text-center mt-5'>Edit Listing</h1>
                <div className='mx-10 my-6 '>
                <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" value={singleproduct.productname} onChange={handlecchange}  name="productname" id="productname" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="productname" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Listing Title</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <select id="category" name='category' value={singleproduct.category} onChange={handlecchange} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Category</option>
        <option value="Fashion & Appreal">Fashion & Appreal</option>
        <option value="Property">Property</option>
        <option value="Jobs">Jobs</option>
        <option value="Services">Services</option>
        <option value="Furniture">Furniture</option>
        <option value="Health">Health</option>
        <option value="Event Planner">Event Planner</option>
        <option value="Beauty">Beauty</option>
</select>      </div>

<div className="relative z-0 w-full mb-6 group">
            <select id="subcategory" name='subcategory' value={singleproduct.subcategory} onChange={handlecchange} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Subcategory</option>
        {singleproduct.category === "Fashion & Appreal" && (<>
            <option value="Men Wear">Men Wear</option>
        <option value="Women Wear">Women Wear</option>
        <option value="Kids Wear">Kids Wear</option>
        <option value="Wedding Wear">Wedding Wear</option>
        <option value="Party Wear">Party Wear</option>
        <option value="Night Wear">Night Wear</option>

        </>)}
        {singleproduct.category === "Property" && (<>
            <option value="Sale">Sale</option>
        <option value="Rent">Rent</option>
        <option value="Homes">Homes</option>
        <option value="Plots">Plots</option>
        <option value="Commercial">Commercial</option>
        <option value="Projects">Projects</option>
        <option value="Rooms">Rooms</option>
        <option value="Agents">Agents</option>
        </>)}
        {singleproduct.category === "Jobs" && (<>
            <option value="Education">Education</option>
        <option value="Design">Design</option>
        <option value="Finance">Finance</option>
        <option value="Accountant">Accountant</option>
        <option value="Advertising">Advertising</option>
        <option value="IT">IT</option>
        <option value="Banking">Banking</option>
        <option value="Management">Management</option>
        <option value="Consulting">Consulting</option>
        <option value="Trainers">Trainers</option>
        <option value="Travel">Travel</option>
        </>)}
        {singleproduct.category === "Services" && (<>
            <option value="Office">Office</option>
        <option value="Household">Household</option>
        <option value="Outdoor">Outdoor</option>
        <option value="Decorations">Decorations</option>
        </>)}
        {singleproduct.category === "Health" && (<>
            <option value="Clinics">Clinics</option>
        <option value="Dentistry">Dentistry</option>
        <option value="Doctor">Doctor</option>
        <option value="Nursing">Nursing</option>
        <option value="Day Care">Day Care</option>
        <option value="Diagnostics">Diagnostics</option>
        </>)}
        {singleproduct.category === "Event Planner" && (<>
            <option value="Wedding">Wedding</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Catering">Catering</option>
        <option value="Festival">Festival</option>
        <option value="Exibition">Exibition</option>
        <option value="Seminar">Seminar</option>
        <option value="Entertainment">Entertainment</option>
        </>)}
        {singleproduct.category === "Beauty" && (<>
            <option value="Facial">Facial</option>
        <option value="Bridal">Bridal</option>
        <option value="Hair Salon">Hair Salon</option>
        <option value="Makeup">Makeup</option>
        <option value="Massages">Massages</option>
        <option value="Spa Salon">Spa Salon</option>
        <option value="Manicures">Manicures</option>
        </>)}
</select>      
</div>
          </div>
          <div className="grid md:grid-cols-5 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input  name="career"  id="career" value={singleproduct.career} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="career" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cloths Gender</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input name="type" id="type" value={singleproduct.type} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="type" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set type</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input name="condition" id="condition" value={singleproduct.condition} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="condition" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Condition</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input name="propertystate" id="propertystate" value={singleproduct.propertystate} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="propertystate" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set prpperty state</label>
        
          </div>
            <div className="relative z-0 w-full mb-6 group">
              <input name="areaunit" id="areaunit" value={singleproduct.areaunit} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="areaunit" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Area unit</label>
        
          </div>
          </div>
        
        
          <div className="grid md:grid-cols-5 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input  name="areasize" id="areasize" value={singleproduct.areasize} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="areasize" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Area Size</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select name="career"  id="career" value={singleproduct.career} onChange={handlecchange} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Career Level</option>
        <option value="Entry Level">Entry Level</option>
        <option value="Associate">Associate</option>
        <option value="Mid-Senior Level">Mid-Senior Level</option>
        <option value="Director">Director</option>
        <option value="Executive">Executive</option>
        </select>
        </div>
          <div className="relative z-0 w-full mb-6 group">
          <select name="position"  id="position" value={singleproduct.position} onChange={handlecchange} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Position Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Temporary">Temporary</option>
</select>    
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type='number'  name="whatsapp" id="whatsapp" value={singleproduct.whatsapp} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="whatsapp" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
        
          </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type='number' name="mobile" id="mobile" value={singleproduct.mobile} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="mobile" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number </label>
        
          </div>
          </div>
        
        
          <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input  name="location" id="location" value={singleproduct.location} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="location" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type='number' name="price" id="price" value={singleproduct.price} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="price" className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
        
          </div>
        

          </div>
        
    
        
        
        


               <TextField fullWidth multiline maxRows={6} placeholder='Edit Product Description' name="description" id="description" value={singleproduct.description} onChange={handlecchange} variant="outlined" className='block py-2.5 px-0 w-full focus:text-black text-sm text-black bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
        
        
        
          <button type="submit" onClick={handlesubmit} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Edit Listing</button>
        </div>
        
                </>
    )
}

export default EditListing;