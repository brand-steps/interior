import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './editstock.css'


const EditStock = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [price, setPrice] = useState("");
    const [descryption, setDescryption] = useState("");
    const [image, setImage] = useState("");


    const fetchSingleProduct = async() => {
        const response = await axios.get(`http://localhost:8000/singlestock/${id}`);
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
        const response = await axios.put(`http://localhost:8000/edittedstock/${id}`, productData);

alert("Product Updated");

    }
    

    useEffect (()=> {
        fetchSingleProduct()

    },[]);
    return (
        <>
        <h1 className='text-3xl font-bold text-white text-center mt-5'>Edit Stock</h1>
                <div className='mx-10 my-6 '>
                <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" value={singleproduct.carname} onChange={handlecchange}  name="carname" id="carname" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="carname" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <select id="make" name='make'  onChange={handlecchange}  className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
                <option>Any Model</option>
                <option value="Albarth">Albarth</option>
                <option value="Alpha Romeo">Alpha Romeo</option>
                <option value="Alpine">Alpine</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Audi">Audi</option>
                <option value="Bently">Bently</option>
                <option value="BMW">BMW</option>
                <option value="Byd">Byd</option>
                <option value="Citroen">Citroen</option>
                <option value="Cupra">Cupra</option>
                <option value="Dacia">Dacia</option>
                <option value="Ds">Ds</option>
                <option value="Flat">Flat</option>
                <option value="Ford">Ford</option>
                <option value="Genesis">Genesis</option>
                <option value="Honda">Honda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Infiniti">Infiniti</option>
                <option value="Isuzu">Isuzu</option>
                <option value="Iveco">Iveco</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Jeep">Jeep</option>
                <option value="Kia">Kia</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Levc">Levc</option>
                <option value="Lexus">Lexus</option>
                <option value="Maserati">Maserati</option>
                <option value="Mazda">Mazda</option>
                <option value="Mercedes">Mercedes</option>
                <option value="MG">MG</option>
                <option value="MINI">MINI</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Polestar">Polestar</option>
                <option value="Porsche">Porsche</option>
                <option value="Renault">Renault</option>
                <option value="Seat">Seat</option>
                <option value="Skonda">Skonda</option>
                <option value="Smart">Smart</option>
                <option value="Ssangyong">Ssangyong</option>
                <option value="Subaru">Subaru</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Tesla">Tesla</option>
                <option value="Toyota">Toyota</option>
                <option value="Vauxhall">Vauxhall</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Volvo">Volvo</option>
        </select>   </div>
          </div>
          <div className="grid md:grid-cols-5 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input  name="model"  id="model" value={singleproduct.model} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="model" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Model</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input name="bodys" id="bodys" value={singleproduct.bodys} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="bodys" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Body type</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type='number' name="milage" id="milage" value={singleproduct.milage} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="milage" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Milage in KM</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="year" name='year' onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0   ">
        <option>Any Make</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>

</select>    
          </div>
            <div className="relative z-0 w-full mb-6 group">
              <input name="color" id="color" value={singleproduct.color} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="color" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Car Color</label>
        
          </div>
          </div>
        
        
          <div className="grid md:grid-cols-5 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input  name="fueltype" id="fueltype" value={singleproduct.fueltype} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="model" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fuel Type</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input name="gearbox" id="gearbox" value={singleproduct.gearbox} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="gearbox" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">GearBox Type</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type='number' name="door" id="door" value={singleproduct.door} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="door" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No Of Doors</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input  name="enginetype" id="enginetype" value={singleproduct.enginetype} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="enginetype" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Type</label>
        
          </div>
            <div className="relative z-0 w-full mb-6 group">
              <input name="enginesize" id="enginesize" value={singleproduct.enginesize} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="enginesize" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Size (CC) </label>
        
          </div>
          </div>
        
        
          <div className="grid md:grid-cols-5 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
              <input type='number'  name="mpg" id="mpg" value={singleproduct.mpg} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="mpg" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MPG</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type='number' name="height" id="height" value={singleproduct.height} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="height" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Height (mm)</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type='number'  name="length" id="length" value={singleproduct.length} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="length" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length (mm)</label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type='number' name="width" id="width" value={singleproduct.width} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="width" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Width (mm)</label>
        
          </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type='number' name="co2emission" id="co2emission" value={singleproduct.co2emission} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="co2emission" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Co2 Emission (g/km)</label>
        
          </div>
          </div>
        
        
          <div className="grid md:grid-cols-5 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
          <select id="ledlight" name='ledlight' value={singleproduct.ledlight} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Led Lights Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>   
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="navigation"  name='navigation'value={singleproduct.navigation} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Navigation Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>      
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="coolingseats" name='coolingseats' value={singleproduct.coolingseats} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Cooling seats Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>      
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="soundsystem" name='soundsystem' value={singleproduct.soundsystem} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Sound System Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>  
        
          </div>
            <div className="relative z-0 w-full mb-6 group">
            <select id="airbags" name='airbags' value={singleproduct.airbags} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Air Bags Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>  
        
          </div>
          </div>
        
        
          <div className="grid md:grid-cols-5 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
          <select id="backcamera" name='backcamera' value={singleproduct.backcamera} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Back Camera Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>   
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="parkingcamera" name='parkingcamera' value={singleproduct.parkingcamera} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Parking Camera Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>       
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="traction"  name='traction' value={singleproduct.traction} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Traction Assist Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>       
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="antilockbreaks" name='antilockbreaks' value={singleproduct.antilockbreaks} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Anti-Locks Brake Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>  
        
          </div>
            <div className="relative z-0 w-full mb-6 group">
            <select id="aircondition"  name='aircondition' value={singleproduct.aircondition} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Air Condition Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>  
        
          </div>
          </div>
        
        
          <div className="grid md:grid-cols-5 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
          <select id="climatecontrol" name='climatecontrol' value={singleproduct.climatecontrol} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Climate Controls Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>   
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="sunroof" name='sunroof' value={singleproduct.sunroof} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Sun Roof Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>       
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <input name="price" id="price" value={singleproduct.price} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="price" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Size (CC) </label>
        
          </div>
          <div className="relative z-0 w-full mb-6 group">
          <select id="installment" name='installment' value={singleproduct.installment} onChange={handlecchange} className="bg-black text-white text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 0 ">
                <option>Installment Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>  
        
          </div>
            <div className="relative z-0 w-full mb-6 group">
            <input name="installmentmonths" id="installmentmonths" value={singleproduct.installmentmonths} onChange={handlecchange} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="installmentmonths" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine Size (CC) </label>
           
        
          </div>
          </div>

               <TextField fullWidth multiline maxRows={6} placeholder='Edit Product Description' value={singleproduct.description} onChange={handlecchange} name="description" variant="outlined" className='block py-2.5 px-0 w-full focus:text-white text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
        
        
        
          <button type="submit" onClick={handlesubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Stock</button>
        </div>
        
                </>
    )
}

export default EditStock;