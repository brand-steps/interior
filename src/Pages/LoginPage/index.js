import { useContext } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import "./loginpage.css"

const LoginPage = () => {
    const navigate = useNavigate();
    const [userName, setuserName] = useState("");
    const [password, setPassword ] = useState("");
    

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        
        if (name == "userName") {
            setuserName(value);
        }
        if (name == "password") {
            setPassword(value);
        }

    };

    const handlesubmit = async () => {
        const userData = {userName,password};
        const response = await fetch('http://localhost:3000/login' , {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body : JSON.stringify(userData)
        });              
        const data = await response.json();
        if (data.user){
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', JSON.stringify(data.token));
        navigate('/')
        return;
    }
    }

    return (
    <div className='rootcontainer'>
        <h2>Login</h2>
        <TextField fullWidth value={userName} onChange={handlecchange} name="userName" label="User Name" variant="outlined" />
        <TextField fullWidth value={password} type='password' onChange={handlecchange} name="password" label="password" variant="outlined" />
        <Button fullWidth onClick={handlesubmit} variant="contained">Login</Button>

        
        </div>
    )
}

export default LoginPage;