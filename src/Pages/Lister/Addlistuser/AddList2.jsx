import React, { useState } from 'react'
import { useEffect } from 'react'
import Footers from '../../../Components/Footer/Footers'
import Navbars from '../../../Components/Header/Navbar/Navbar'
import AddListHeader from '../../../Components/Body/Addlistcomponent/Addlistheader/AddListHeader'
import HomeCategory from '../../../Components/Body/Home/Homecategory/HomeCategory'
import estate from '../../../Assets/estate.png'
import fashion from '../../../Assets/fashion.png'
import jobs from '../../../Assets/jobs.png'
import service from '../../../Assets/service.png'
import furniture from '../../../Assets/furniture.png'
import FashionType from '../../../Components/Body/Categorycomponents/Fashioncomponents/Fashiontype/FashionType'
import { TextField } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddList2 = () => {
  const navigate = useNavigate();
  let [customeruser, setcustomeruser] = useState(false);
  let [customerresponse, setcustomerresponse] = useState("");

  const [categorybool, setcategorybool] = useState(true)
  const [subcategorybool, setsubcategorybool] = useState(false)
  const [publishbool, setpublishbool] = useState(false)

  const [fashionbool, setfashionbool] = useState(false)
  const [propertybool, setpropertybool] = useState(false)
  const [joobbool, setjoobbool] = useState(false)
  const [servicesbool, setservicesbool] =   useState(false)
  const [furniturebool, setfurniturebool] = useState(false)
  const [healthbool, sethealthbool] = useState(false)
  const [eventbool, seteventbool] = useState(false)
  const [beautybool, setbeautybool] = useState(false)

  const [fashionformbool, setfashionformbool] = useState(false)
  const [propertyformbool, setpropertyformbool] = useState(false)
  const [joobformbool, setjoobformbool] = useState(false)
  const [servicesformbool, setservicesformbool] =   useState(false)
  const [furnitureformbool, setfurnitureformbool] = useState(false)
  const [healthformbool, sethealthformbool] = useState(false)
  const [eventformbool, seteventformbool] = useState(false)
  const [beautyformbool, setbeautyformbool] = useState(false)

  const [productname, setproductname] = useState()
  const [category, setcategory] = useState()
  const [subcategory, setsubcategory] = useState()
  const [gender, setgender] = useState()
  const [type, settype] = useState()
  const [condition, setcondition] = useState()
  const [propertystate, setpropertystate] = useState()
  const [areaunit, setareaunit] = useState()
  const [areasize, setareasize] = useState()
  const [career, setcareer] = useState()
  const [position, setposition] = useState()
  const [whatsapp, setwhatsapp] = useState()
  const [mobile, setmobile] = useState()
  const [location, setlocation] = useState()
  const [listername, setlistername] = useState()
  const [listerid, setlisterid] = useState()
  const [description, setdescription] = useState()
  const [price, setprice] = useState()
  const [imageUrl1, setimageUrl1] = useState()
  const [imageUrl2, setimageUrl2] = useState()
  const [imageUrl3, setimageUrl3] = useState()
  const [imageUrl4, setimageUrl4] = useState()
  const [imageUrl5, setimageUrl5] = useState()
  const [imageUrl6, setimageUrl6] = useState()

  const handleFileChange = (event) => {
    // Ensure only up to 8 files are selected
    setimageUrl1(event.target.files);

  };
  const handleFileChange2 = (event) => {
    setimageUrl2(event.target.files);
  };
  const handleFileChange3 = (event) => {
    setimageUrl3(event.target.files);
  };
  const handleFileChange4 = (event) => {
    setimageUrl4(event.target.files);
  };
  const handleFileChange5 = (event) => {
    setimageUrl5(event.target.files);
  };
  const handleFileChange6 = (event) => {
    setimageUrl6(event.target.files);
  };

  const handleUpload = async () => {
console.log("img",imageUrl1)

const formData = new FormData();

    if (imageUrl1 ) {
        for (let i = 0; i < imageUrl1.length; i++) {
            formData.append("images", imageUrl1[i]);
          }
    }
    if (imageUrl2 ) {
        for (let i = 0; i < imageUrl2.length; i++) {
            formData.append("images", imageUrl2[i]);
          }
    }    if (imageUrl3 ) {
        for (let i = 0; i < imageUrl3.length; i++) {
            formData.append("images", imageUrl3[i]);
          }
    }    if (imageUrl4 ) {
        for (let i = 0; i < imageUrl4.length; i++) {
            formData.append("images", imageUrl4[i]);
          }
    }    if (imageUrl5) {
        for (let i = 0; i < imageUrl5.length; i++) {
            formData.append("images", imageUrl5[i]);
          }
    }    if (imageUrl6 ) {
        for (let i = 0; i < imageUrl6.length; i++) {
            formData.append("images", imageUrl6[i]);
          }
    }

    
    formData.append("productname", productname);
    formData.append("category", category);
    formData.append("subcategory", subcategory);
    formData.append("gender", gender);
    formData.append("type", type);
    formData.append("condition", condition);

    //refrigeration
    formData.append("propertystate", propertystate);
    formData.append("areaunit", areaunit);
    formData.append("areasize", areasize);
    formData.append("career", career);
    formData.append("position", position);
    formData.append("whatsapp", whatsapp);
    formData.append("mobile", mobile);
    formData.append("location", location);
    formData.append("listername", listername);
    formData.append("listerid", listerid);
    formData.append("description", description);
    formData.append("price", price);



    try {
      const response = await axios.post(
        "http://localhost:8000/addlist",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      alert("Product Added Suceesfully ");
      window.location.reload(false);

      
      // Handle response from backend if needed
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await axios.get(
          `http://localhost:8000/api/v1/listerprofile`,
          {
            withCredentials: true,
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
              Expires: "0",
            },
          }
        );

        // console.log("response: ", response);
        setcustomerresponse(response.data);
        setcustomeruser(true);
        setlistername(customerresponse.firstname);
        setlisterid(customerresponse._id);
      } catch (error) {
        console.log("axios error: ", error);
      }
    };
    getProfile();
  }, []);

  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    width: '100px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };
  const containerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '250px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    marginBottom: '16px',
  };
  const imageStyle2 = {
    width: '120px',
    height: '120px',
    marginBottom: '16px',
  };

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (

   <>
   <Navbars/>
   <AddListHeader/>
   <div className='flex  justify-evenly  flex-wrap bg-white pt-5' >
              <div style={containerStyle2} className={categorybool ? 'bg-slate-200' : 'bg-white'}>
        <img src="https://cdn-icons-png.flaticon.com/512/5485/5485853.png" alt="Fairs" style={imageStyle2} />
        <h1>1. choose Category</h1>

      </div>
      <div style={containerStyle2} className={subcategorybool ? 'bg-slate-200' : 'bg-white'}>
        <img src="https://cdn-icons-png.flaticon.com/512/1767/1767050.png" alt="Fairs" style={imageStyle2} />
        <h1>2. choose SubCategory</h1>
      </div>

      <div style={containerStyle2} className={publishbool ? 'bg-slate-200' : 'bg-white'}>
        <img src="https://cdn-icons-png.flaticon.com/512/2248/2248485.png" alt="Fairs" style={imageStyle2} />
        <h1>3. Publish Add</h1>

      </div>  

      </div>  

<div>
{categorybool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Choose A Category</h1>
   </div>
<div className='flex  justify-evenly flex-wrap my-4' >
              <div style={containerStyle} onClick={() => {setcategory("Fashion & Appreal"); setsubcategorybool(true); setcategorybool(false); setfashionbool(true)}}>
        <img src={fashion} alt="Fairs" style={imageStyle} />
        <h1>Fashion & Appreal</h1>
      </div>
      <div style={containerStyle} onClick={() => {setcategory("Property"); setsubcategorybool(true); setcategorybool(false); setpropertybool(true)}} >
        <img src={estate} alt="Fairs" style={imageStyle} />
        <h1>Property</h1>
      </div>
      <div style={containerStyle} onClick={() => {setcategory("Jobs"); setsubcategorybool(true); setcategorybool(false); setjoobbool(true)}}>
        <img src={jobs} alt="Fairs" style={imageStyle} />
        <h1>Jobs</h1>

      </div>

      <div style={containerStyle} onClick={() => {setcategory("Services"); setsubcategorybool(true); setcategorybool(false); setservicesbool(true)}}>
        <img src={service} alt="Fairs" style={imageStyle} />
        <h1>Services</h1>

      </div>
      <div style={containerStyle} onClick={() => {setcategory("Furniture"); setsubcategorybool(true); setcategorybool(false); setfurniturebool(true)}}>
        <img src={furniture} alt="Fairs" style={imageStyle} />
        <h1>Furniture</h1>

      </div>
      <div style={containerStyle} onClick={() => {setcategory("Health"); setsubcategorybool(true); setcategorybool(false); sethealthbool(true)}}>
        <img src="https://icons.veryicon.com/png/o/business/circular-multi-color-function-icon/health-health.png" alt="Fairs" style={imageStyle} />
        <h1>Health</h1>

      </div>
      <div style={containerStyle} onClick={() => {setcategory("Event Planner"); setsubcategorybool(true); setcategorybool(false); seteventbool(true)}}>
        <img src="https://cdn3.iconfinder.com/data/icons/basic-icons-5/64/EVENTS_CALENDAR-512.png" alt="Fairs" style={imageStyle} />
        <h1>Event Planner</h1>

      </div>

      <div style={containerStyle} onClick={() => {setcategory("Beauty"); setsubcategorybool(true); setcategorybool(false); setbeautybool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/1/5/1587.9-hairdresser-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Beauty </h1>

      </div>

    </div>

</>
        )}
        {fashionbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Choose A SubCategory</h1>
 
    <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" className='h-12 w-12 ml-16 mt-6' onClick={()=> {window.location.reload(false);}} />
   </div>
<div className=' flex justify-evenly mb-6'>
    <div className=' flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {setsubcategory("Men Wear"); setsubcategorybool(false); setfashionbool(false); setfashionformbool(true); setpublishbool(true)}}>
        <img src="https://static.vecteezy.com/system/resources/previews/006/747/449/original/a-hanging-t-shirt-icon-in-flat-design-mens-wear-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Men Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Women Wear"); setsubcategorybool(false); setfashionbool(false); setfashionformbool(true); setpublishbool(true)}}>
        <img src="https://cdn1.iconfinder.com/data/icons/clothes-13/512/dress-512.png" alt="Fairs" style={imageStyle} />
        <h1>Women Wear</h1>
      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Kids Wear"); setsubcategorybool(false); setfashionbool(false); setfashionformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/196/196466.png" alt="Fairs" style={imageStyle} />
        <h1>Kids Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Wedding Wear"); setsubcategorybool(false); setfashionbool(false); setfashionformbool(true); setpublishbool(true)}}>
        <img src="https://cdn4.iconfinder.com/data/icons/love-and-romance-2-9/128/53-512.png" alt="Fairs" style={imageStyle} />
        <h1>Wedding Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Party Wear"); setsubcategorybool(false); setfashionbool(false); setfashionformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/189/189580.png" alt="Fairs" style={imageStyle} />
        <h1>Party Wear</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Night Wear"); setsubcategorybool(false); setfashionbool(false); setfashionformbool(true); setpublishbool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/3/1301.9-pyjamas-suit-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Night Wear</h1>

      </div>
    
      </div>      
    </div>

</>
        )}
                {propertybool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Choose A SubCategory</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" className='h-12 w-12 ml-16 mt-6' onClick={()=> {window.location.reload(false);}} />
 
   </div>
   <div className=' flex justify-evenly mb-6'>
    <div className=' flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => { setsubcategory("Sale"); setsubcategorybool(false); setpropertybool(false); setpropertyformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/196/196266.png" alt="Fairs" style={imageStyle} />
        <h1>Sale</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Rent"); setsubcategorybool(false); setpropertybool(false); setpropertyformbool(true); setpublishbool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/1/1/1153.9-house-on-rent-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Rent</h1>
      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Homes"); setsubcategorybool(false); setpropertybool(false); setpropertyformbool(true); setpublishbool(true)}}>
        <img src="https://images.vexels.com/media/users/3/140527/isolated/preview/449b95d58f554656b159dd3ca21ab123-home-round-icon.png" alt="Fairs" style={imageStyle} />
        <h1>Homes</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Plots"); setsubcategorybool(false); setpropertybool(false); setpropertyformbool(true); setpublishbool(true)}}>
        <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Marker-512.png" alt="Fairs" style={imageStyle} />
        <h1>Plots</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Commercial"); setsubcategorybool(false); setpropertybool(false); setpropertyformbool(true); setpublishbool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/2/3/2355.9-offices-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Commercial</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Projects"); setsubcategorybool(false); setpropertybool(false); setpropertyformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/7412/7412637.png" alt="Fairs" style={imageStyle} />
        <h1>Projects</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Rooms"); setsubcategorybool(false); setpropertybool(false); setpropertyformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/195/195461.png" alt="Fairs" style={imageStyle} />
        <h1>Rooms</h1>

      </div>
      
      <div style={containerStyle} onClick={() => {setsubcategory("Agents"); setsubcategorybool(false); setpropertybool(false); setpropertyformbool(true); setpublishbool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/2/9/2915.9-support-agent-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Agents </h1>

      </div>
      </div>      
    </div>

</>
        )}
                        {joobbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Choose A SubCategory</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" className='h-12 w-12 ml-16 mt-6' onClick={()=> {window.location.reload(false);}} />
 
   </div>
   <div className=' flex justify-evenly mb-6'>
    <div className=' flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {setsubcategory("Education"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/234/234588.png" alt="Fairs" style={imageStyle} />
        <h1>Education</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Design"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/953/953060.png" alt="Fairs" style={imageStyle} />
        <h1>Design</h1>
      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Finance"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/5293/5293064.png" alt="Fairs" style={imageStyle} />
        <h1>Finance</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Accountant"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://static.vecteezy.com/system/resources/previews/004/697/021/original/payment-accounting-circle-flat-icon-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Accountant</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Advertising"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/2215/2215022.png" alt="Fairs" style={imageStyle} />
        <h1>Advertising</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("IT"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://icon-library.com/images/website-icon-circle/website-icon-circle-4.jpg" alt="Fairs" style={imageStyle} />
        <h1>IT</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Banking"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/1/5/1538.9-bank-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Banking</h1>
      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Management"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/1870/1870096.png" alt="Fairs" style={imageStyle} />
        <h1>Management</h1>
      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Consulting"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/5809/5809644.png" alt="Fairs" style={imageStyle} />
        <h1>Consulting</h1>
      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Trainers"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/249/249216.png" alt="Fairs" style={imageStyle} />
        <h1>Trainers</h1>
      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Travel"); setsubcategorybool(false); setjoobbool(false); setjoobformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="Fairs" style={imageStyle} />
        <h1>Travel</h1>
      </div>


      </div>      
    </div>

</>
        )}

{servicesbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Choose A SubCategory</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" className='h-12 w-12 ml-16 mt-6' onClick={()=> {window.location.reload(false);}} />
 
   </div>
   <div className=' flex justify-evenly mb-6'>
    <div className=' flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {setsubcategory("Electrician"); setsubcategorybool(false); setservicesbool(false); setservicesformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/756/756871.png" alt="Fairs" style={imageStyle} />
        <h1>Electrician</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Plumber"); setsubcategorybool(false); setservicesbool(false); setservicesformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/756/756878.png" alt="Fairs" style={imageStyle} />
        <h1>Plumber</h1>
      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Painter"); setsubcategorybool(false); setservicesbool(false); setservicesformbool(true); setpublishbool(true)}}>
        <img src="https://cdn0.iconfinder.com/data/icons/graphic-design-tools-flat-colorful-icons-svg/137/Graphic_Design_Tools-19-512.png" alt="Fairs" style={imageStyle} />
        <h1>Painter</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Carpenter"); setsubcategorybool(false); setservicesbool(false); setservicesformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732555.png" alt="Fairs" style={imageStyle} />
        <h1>Carpenter</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Mechanic"); setsubcategorybool(false); setservicesbool(false); setservicesformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/4382/4382722.png" alt="Fairs" style={imageStyle} />
        <h1>Mechanic</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Technician"); setsubcategorybool(false); setservicesbool(false); setservicesformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/5025/5025140.png" alt="Fairs" style={imageStyle} />
        <h1>Technician</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Cleaner"); setsubcategorybool(false); setservicesbool(false); setservicesformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/1590/1590850.png" alt="Fairs" style={imageStyle} />
        <h1>Cleaner</h1>
      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Driver"); setsubcategorybool(false); setservicesbool(false); setservicesformbool(true); setpublishbool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/2/1/2133.9-driving-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Driver</h1>
      </div>

      </div>      
    </div>

</>
        )}
                        {furniturebool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Choose A SubCategory</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" className='h-12 w-12 ml-16 mt-6' onClick={()=> {window.location.reload(false);}} />
 
   </div>
   <div className=' flex justify-evenly mb-6'>
    <div className=' flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {setsubcategory("Office"); setsubcategorybool(false); setfurniturebool(false); setfurnitureformbool(true); setpublishbool(true)}}>
        <img src="https://icon-library.com/images/office-chair-icon/office-chair-icon-7.jpg" alt="Fairs" style={imageStyle} />
        <h1>Office </h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Household"); setsubcategorybool(false); setfurniturebool(false); setfurnitureformbool(true); setpublishbool(true)}}>
        <img src="https://cdn4.iconfinder.com/data/icons/construction-flat-round-engineering/512/Interior_Decoration-512.png" alt="Fairs" style={imageStyle} />
        <h1>Household</h1>
      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Outdoor"); setsubcategorybool(false); setfurniturebool(false); setfurnitureformbool(true); setpublishbool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/9/1900.9-dining-table-i-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Outdoor</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Decorations"); setsubcategorybool(false); setfurniturebool(false); setfurnitureformbool(true); setpublishbool(true)}}>
        <img src="https://cdn2.iconfinder.com/data/icons/hobby-butterscotch-vol-2/512/Interior_Decorating-512.png" alt="Fairs" style={imageStyle} />
        <h1>Decorations</h1>

      </div>


      

      </div>      
    </div>

</>
        )}
                        {healthbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Choose A SubCategory</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" className='h-12 w-12 ml-16 mt-6' onClick={()=> {window.location.reload(false);}} />
 
   </div>
   <div className=' flex justify-evenly mb-6'>
    <div className=' flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {setsubcategory("Clinics"); setsubcategorybool(false); sethealthbool(false); sethealthformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/745/745435.png" alt="Fairs" style={imageStyle} />
        <h1>Clinics</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Dentistry"); setsubcategorybool(false); sethealthbool(false); sethealthformbool(true); setpublishbool(true)}}>
        <img src="https://static.vecteezy.com/system/resources/previews/007/925/792/original/tooth-in-circle-icon-isolated-on-white-background-free-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Dentistry</h1>
      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Doctor"); setsubcategorybool(false); sethealthbool(false); sethealthformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/504/504061.png" alt="Fairs" style={imageStyle} />
        <h1>Doctor</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Nursing"); setsubcategorybool(false); sethealthbool(false); sethealthformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/194/194924.png" alt="Fairs" style={imageStyle} />
        <h1>Nursing</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Day Care"); setsubcategorybool(false); sethealthbool(false); sethealthformbool(true); setpublishbool(true)}}>
        <img src="https://static.vecteezy.com/system/resources/previews/030/943/864/original/daycare-center-icon-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Day Care</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Diagnostics"); setsubcategorybool(false); sethealthbool(false); sethealthformbool(true); setpublishbool(true)}}>
        <img src="https://cdn3.iconfinder.com/data/icons/medical-round-metaphors/150/MedicalIconSetCollection11-512.png" alt="Fairs" style={imageStyle} />
        <h1>Diagnostics</h1>

      </div>

      </div>      
    </div>

</>
        )}
                        {eventbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Choose A SubCategory</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" className='h-12 w-12 ml-16 mt-6' onClick={()=> {window.location.reload(false);}} />
 
   </div>
   <div className=' flex justify-evenly mb-6'>
    <div className=' flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {setsubcategory("Wedding"); setsubcategorybool(false); seteventbool(false); seteventformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/290/290018.png" alt="Fairs" style={imageStyle} />
        <h1>Wedding</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Birthday"); setsubcategorybool(false); seteventbool(false); seteventformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/168/168532.png" alt="Fairs" style={imageStyle} />
        <h1>Birthday</h1>
      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Catering"); setsubcategorybool(false); seteventbool(false); seteventformbool(true); setpublishbool(true)}}>
        <img src="https://static.vecteezy.com/system/resources/previews/016/045/126/original/concession-catering-glyph-circle-icon-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Catering</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Anniversary"); setsubcategorybool(false); seteventbool(false); seteventformbool(true); setpublishbool(true)}}>
        <img src="https://i.pinimg.com/564x/1f/7a/1c/1f7a1c41e2940c4e74779b6cf7fe6190.jpg" alt="Fairs" style={imageStyle} />
        <h1>Anniversary</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Festival"); setsubcategorybool(false); seteventbool(false); seteventformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/2784/2784589.png" alt="Fairs" style={imageStyle} />
        <h1>Festival</h1>

      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Exibition"); setsubcategorybool(false); seteventbool(false); seteventformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/2784/2784615.png" alt="Fairs" style={imageStyle} />
        <h1>Exibition</h1>
      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Seminar"); setsubcategorybool(false); seteventbool(false); seteventformbool(true); setpublishbool(true)}}>
        <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/9/3926.9-presenting-icon-iconbunny.jpg" alt="Fairs" style={imageStyle} />
        <h1>Seminar</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Entertainment"); setsubcategorybool(false); seteventbool(false); seteventformbool(true); setpublishbool(true)}}>
        <img src="https://i.pinimg.com/564x/02/99/62/029962604b992c5ba477e94cc9f12a5a.jpg" alt="Fairs" style={imageStyle} />
        <h1>Entertainment</h1>

      </div>
      </div>      
    </div>

</>
        )}
                        {beautybool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-1 mt-62'>
    <h1>Choose A SubCategory</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back" className='h-12 w-12 ml-16 mt-6' onClick={()=> {window.location.reload(false);}} />
 
   </div>
   <div className=' flex justify-evenly mb-6'>
    <div className=' flex  justify-evenly  flex-wrap bg-white w-5/6 pt-5' >
              <div style={containerStyle} onClick={() => {setsubcategory("Facial"); setsubcategorybool(false); setbeautybool(false); setbeautyformbool(true); setpublishbool(true)}}>
        <img src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-spa-facial-clay-mask-icon-circle-png-image_5282209.jpg" alt="Fairs" style={imageStyle} />
        <h1>Facial</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Bridal"); setsubcategorybool(false); setbeautybool(false); setbeautyformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/209/209089.png" alt="Fairs" style={imageStyle} />
        <h1>Bridal</h1>
      </div>

      <div style={containerStyle} onClick={() => {setsubcategory("Hair Salon"); setsubcategorybool(false); setbeautybool(false); setbeautyformbool(true); setpublishbool(true)}}>
        <img src="https://img.freepik.com/premium-vector/round-icon-hair-salon-with-scissors-comb_690577-679.jpg?w=2000" alt="Fairs" style={imageStyle} />
        <h1>Hair Salon</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Makeup"); setsubcategorybool(false); setbeautybool(false); setbeautyformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/220/220012.png" alt="Fairs" style={imageStyle} />
        <h1>Makeup</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Massages"); setsubcategorybool(false); setbeautybool(false); setbeautyformbool(true); setpublishbool(true)}}>
        <img src="https://static.vecteezy.com/system/resources/previews/009/043/942/non_2x/hand-massage-glyph-circle-background-icon-vector.jpg" alt="Fairs" style={imageStyle} />
        <h1>Massages</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Spa Salon"); setsubcategorybool(false); setbeautybool(false); setbeautyformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/8630/8630206.png" alt="Fairs" style={imageStyle} />
        <h1>Spa Salon</h1>

      </div>
      <div style={containerStyle} onClick={() => {setsubcategory("Manicures"); setsubcategorybool(false); setbeautybool(false); setbeautyformbool(true); setpublishbool(true)}}>
        <img src="https://cdn-icons-png.flaticon.com/512/1802/1802475.png" alt="Fairs" style={imageStyle} />
        <h1>Manicures</h1>
      </div>
      

      </div>      
    </div>

</>
        )}
                        {fashionformbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Add your Listing</h1>
   </div>


<div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-3 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input onChange={(event) => { setproductname(event.target.value); }} type="text" name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Title</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <select onChange={(event) => { setgender(event.target.value); }} id="country" name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
</select>   
</div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { settype(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Type</option>
        <option value="Dress">Dress</option>
        <option value="Shirt">Shirt</option>
        <option value="Pant">Pant</option>
        <option value="Jackets">Jackets</option>
        <option value="Coat">Coat</option>
        <option value="Shorts">Shorts</option>
        <option value="Jackets">Jackets</option>
        <option value="UnderGarment">UnderGarment</option>


</select>   
</div>

  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <select id="country" onChange={(event) => { setcondition(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Condition</option>
        <option value="New">New</option>
        <option value="Used">Used</option>
</select> </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setprice(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Price</label>

  </div>
  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setwhatsapp(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
 </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setmobile(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setlocation(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Location</label>

  </div>
  </div>
  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth multiline maxRows={10} onChange={(event) => { setdescription(event.target.value); }} placeholder='Edit Product Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>




  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange}  />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>
  <button onTouchStart={() => {setlistername(customerresponse.firstname);setlisterid(customerresponse._id);}}
   onMouseEnter={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);
}} type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
</div>





  

</>
        )}
                                {propertyformbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Add your Listing</h1>
   </div>


<div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-3 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(event) => { setproductname(event.target.value); }} name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Title</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { setpropertystate(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select State</option>
        <option value="Grey Structure">Grey Structure</option>
        <option value="Finished">Finished</option>
</select>   
</div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" name='country' onChange={(event) => { settype(event.target.value); }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Type</option>
        <option value="Unfurnished">Unfurnished</option>
        <option value="Furnished">Furnished</option>



</select>   
</div>

  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <select id="country" name='country' onChange={(event) => { setareaunit(event.target.value); }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Area Unit</option>
        <option value="Kanal">Kanal</option>
        <option value="Marla">Marla</option>
        <option value="Square Feet">Square Feet</option>
        <option value="Square Meter">Square Meter</option>
        <option value="Square Yards">Square Yards</option>
</select> </div>
  <div className="relative z-0 w-full mb-6 group">
      <input name="postal" onChange={(event) => { setareasize(event.target.value); }} type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Area</label>

  </div>
  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setwhatsapp(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
 </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setmobile(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setprice(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Price</label>

  </div>
  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setlocation(event.target.value); }} name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Location</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth multiline maxRows={10} onChange={(event) => { setdescription(event.target.value); }} placeholder='Edit Product Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>

  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange}  />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>
  <button
  onTouchStart={()=> {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);}}

  onMouseEnter={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);
}} type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
</div>





  

</>
        )}
                                        {joobformbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Add your Listing</h1>
   </div>


<div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-3 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(event) => { setproductname(event.target.value); }} name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Title</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { setcareer(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Career Level</option>
        <option value="Entry Level">Entry Level</option>
        <option value="Associate">Associate</option>
        <option value="Mid-Senior Level">Mid-Senior Level</option>
        <option value="Director">Director</option>
        <option value="Executive">Executive</option>
</select>   
</div>
    <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { settype(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Type</option>
        <option value="Job Wanted">Job Wanted</option>
        <option value="Job Offer">Job Offer</option>



</select>   
</div>

  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <select id="country" name='country' onChange={(event) => { setposition(event.target.value); }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Position Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Temporary">Temporary</option>
</select> </div>

  <div className="relative z-0 w-full mb-6 group">
      <input name="postal" onChange={(event) => { setprice(event.target.value); }} type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Salary</label>

  </div>
  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setwhatsapp(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
 </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setmobile(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setlocation(event.target.value); }} name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Location</label>

  </div>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth multiline maxRows={10} onChange={(event) => { setdescription(event.target.value); }} placeholder='Your Ad Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>

  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange}  />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>
  <button
  onTouchStart={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);}}

  onMouseEnter={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);
}} type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
</div>





  

</>
        )}
                                                {servicesformbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Add your Listing</h1>
   </div>


<div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(event) => { setproductname(event.target.value); }} name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Title</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { settype(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>



</select>   
</div>

  </div>
  <div className="grid md:grid-cols-1 md:gap-6">


  <div className="relative z-0 w-full mb-6 group">
      <input name="postal" type='number' onChange={(event) => { setprice(event.target.value); }} id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Price</label>

  </div>
  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setwhatsapp(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
 </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setmobile(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setlocation(event.target.value); }} name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Location</label>

  </div>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth multiline maxRows={10} onChange={(event) => { setdescription(event.target.value); }} placeholder='Your Ad Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>

  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange}  />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>
  <button
  onTouchStart={()=> {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);}}

  onMouseEnter={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);
}} type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
</div>





  

</>
        )}
                                                {furnitureformbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Add your Listing</h1>
   </div>


<div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(event) => { setproductname(event.target.value); }} name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Title</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { settype(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Furniture Type</option>
        <option value="Sofa & Chair">Sofa & Chair</option>
        <option value="Bed & Wardrobe">Bed & Wardrobe</option>
        <option value="Table & Dining">Table & Dining</option>
        <option value="Gardening">Gardening</option>
        <option value="Painting & Mirror">Painting & Mirror</option>
        <option value="Rugs & Carpets">Rugs & Carpets</option>
        <option value="Curtains & Blinds">Curtains & Blinds</option>
        <option value="Decoration">Decoration</option>
        <option value="Other Items">Other Items</option>



</select>   
</div>

  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { setcondition(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Condition</option>
        <option value="New">New</option>
        <option value="Used">Used</option>
</select>   
</div>

  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setprice(event.target.value); }} name="postal" type='number'  id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Price</label>

  </div>
  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setwhatsapp(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
 </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setmobile(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setlocation(event.target.value); }} name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Location</label>

  </div>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth multiline maxRows={10} onChange={(event) => { setdescription(event.target.value); }} placeholder='Your Ad Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>

  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange}  />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>
  <button
  onTouchStart={()=> {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);}}

  onMouseEnter={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);
}} type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
</div>





  

</>
        )}
                                                        {healthformbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Add your Listing</h1>
   </div>


<div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-3 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(event) => { setproductname(event.target.value); }} name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Title</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
    <select id="country" onChange={(event) => { setposition(event.target.value); }} name='country' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Specialization Filed</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Psychiatrist">Psychiatrist</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Endocrinologist">Endocrinologist</option>
        <option value="Neurology">Neurology</option>
        <option value="Gastroenterologist">Gastroenterologist</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Oncologist">Oncologist</option>
        <option value="Ophthalmologist">Ophthalmologist</option>
        <option value="Neurology">Neurology</option>
        <option value="Surgeon">Surgeon</option>
        <option value="Internists">Internists</option>
        <option value="Otolaryngologists">Otolaryngologists</option>
        <option value="Anesthesiology">Anesthesiology</option>
        <option value="Neurology">Neurology</option>
        <option value="Geriatrician">Geriatrician</option>
        <option value="Plastic surgeons">Plastic surgeons</option>
        <option value="Nephrologist">Nephrologist</option>
        <option value="Allergist">Allergist</option>
        <option value="Neurology">Neurology</option>
        <option value="Hematology">Hematology</option>
        <option value="Orthopedist">Orthopedist</option>
        <option value="Nephrologist">Nephrologist</option>


</select>   
</div>
<div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setprice(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Price</label>

  </div>
  </div>

  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setwhatsapp(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
 </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setmobile(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setlocation(event.target.value); }} name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Location</label>

  </div>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth multiline maxRows={10} onChange={(event) => { setdescription(event.target.value); }} placeholder='Your Ad Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>

  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange}  />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>
  <button
    onTouchStart={()=> {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);}}
  onMouseEnter={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);
}} type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
</div>





  

</>
        )}
                                                       {eventformbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Add your Listing</h1>
   </div>


<div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-1 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="firstname" onChange={(event) => { setproductname(event.target.value); }} id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Title</label>
    </div>

  </div>
  <div className="grid md:grid-cols-1 md:gap-6">

  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setprice(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Price</label>

  </div>
  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setwhatsapp(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
 </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setmobile(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setlocation(event.target.value); }} name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Location</label>

  </div>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth multiline maxRows={10} onChange={(event) => { setdescription(event.target.value); }} placeholder='Your Ad Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>

  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange}  />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>
  <button
    onTouchStart={()=> {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);}}
  onMouseEnter={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);
}} type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
</div>





  

</>
        )}
                                                       {beautyformbool && (
<>
<div className='font-bold text-3xl text-violet-500 ml-4 mb-12 mt-6'>
    <h1>Add your Listing</h1>
   </div>


<div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" onChange={(event) => { setproductname(event.target.value); }} name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Title</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
    <select id="country" name='country' onChange={(event) => { settype(event.target.value); }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Type</option>
        <option value="Classic facial">Classic facial</option>
        <option value="LED light therapy">LED light therapy</option>
        <option value="Acne facial">Acne facial</option>
        <option value="Massage">Massage</option>
        <option value="Bridal Makeup">Bridal Makeup</option>
        <option value="AirBrush Makeup">AirBrush Makeup</option>
        <option value="Minimal Makeup">Minimal Makeup</option>
        <option value="Hairstyling">Hairstyling</option>
        <option value="Waxing">Waxing</option>

        <option value="Nails">Nails</option>
        <option value="HydraFacial">HydraFacial</option>
        <option value="Acne facial">Acne facial</option>
        <option value="Massage">Massage</option>
        <option value="Eyebrow shaping">Eyebrow shaping</option>
        <option value="Barber">Barber</option>
        <option value="Manicure">Manicure</option>
        <option value="Pedicure">Pedicure</option>

</select>   
</div>

  </div>
  <div className="grid md:grid-cols-1 md:gap-6">

  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setprice(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Price</label>

  </div>
  </div>
  <div className="grid md:grid-cols-3 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setwhatsapp(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
 </div>
  <div className="relative z-0 w-full mb-6 group">
      <input onChange={(event) => { setmobile(event.target.value); }} name="postal" type='number' id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number</label>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input onChange={(event) => { setlocation(event.target.value); }} name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="postal" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Set Location</label>

  </div>

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth multiline maxRows={10} onChange={(event) => { setdescription(event.target.value); }} placeholder='Your Ad Description' name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white  border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>

  </div>

  <div className="grid md:grid-cols-6 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange}  />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange2} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange3} />

  </div>
  <div className="relative z-0 w-full mb-6 group">
  <input type="file" name="images" onChange={handleFileChange4} />

  </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange5} />

  </div>
      <div className="relative z-0 w-full mb-6 group">
    <input type="file" name="images" onChange={handleFileChange6} />

  </div>
  </div>
  <button
    onTouchStart={()=> {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);}}
  onMouseEnter={() => {setlistername(customerresponse.firstname);         setlisterid(customerresponse._id);
}} type="submit" onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">List</button>
</div>





  

</>
        )}
</div>
   <Footers/>
   </>

  )
}

export default AddList2