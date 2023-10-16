import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import './selectprouser.css'

const EditUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleproduct, setsingleproduct] = useState([]);
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setPhone] = useState("");


    const fetchSingleProduct = async() => {
        const response = await axios.get(`http://localhost:8000/edituser/${id}`);
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
    

    const handlesubmit = async () => {
        const UserData = { ...singleproduct};
        const response = await axios.put(`http://localhost:8000/edittedUsers/${id}`, UserData);
        alert("User Updated");
    }
    
    useEffect (()=> {
        fetchSingleProduct()

    },[]);

    return (
    <div className='rootcontainer'>
        <h1 className='Heading'>EDIT USER</h1>
        <TextField fullWidth value={singleproduct.username} onChange={handlecchange} name="username" variant="outlined"  />
        <TextField fullWidth value={singleproduct.email} onChange={handlecchange} name="email" variant="outlined" />
        <TextField fullWidth value={singleproduct.password} onChange={handlecchange} name="password" variant="outlined" />
        <TextField fullWidth value={singleproduct.phone} onChange={handlecchange} name="phone" type='number' variant="outlined" />

        <Button fullWidth onClick={handlesubmit} variant="contained">edit User</Button>

        
        </div>
    )
}

export default EditUser;