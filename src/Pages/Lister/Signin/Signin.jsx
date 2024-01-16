import React, { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbars from '../../../Components/Header/Navbar/Navbar';
import Footers from '../../../Components/Footer/Footers';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState('');
  const [login, setlogin] = useState(false)

  const [Delete , setdelete] = useState(false);

    

      const LoginForm = async () => {
        if (!email || !password) {
          console.log('Value is not Given');
          alert("Please enter Missing Fields")
          return
        }
        // https://glorious-hat-bat.cyclic.app      // old url
        else {
          try {
            let response = await axios.post(`http://localhost:8000/listerlogin`, {
              email: email,
              password: password
            }, {
              withCredentials: true
            })
              console.log("login successful");
              alert("login successfull")
            navigate("/")
            } catch (error) {
            console.log(error)
            alert("Invalid Email or Password")
            setErrorMessage('Invalid Email or Password'); 
          }
        }
      };


  return (
        <>
        <Navbars/>
        <div className='flex  justify-evenly flex-wrap my-20 pt-12'>
        <Card className=" w-11/12 sm:w-2/4">
      <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
          <h1 className='text-center font-bold text-2xl'>Lister Login</h1>

            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput id="email" onChange={(event) => { setemail(event.target.value); }} type="email" placeholder="Your Email" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" onChange={(event) => { setPassword(event.target.value); }} type="password" placeholder='******' required />
        </div>
        
    {/*}    <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
  </div> */}
  
  <div className="text-sm font-medium text-right text-gray-500 ">
            Not registered? <Link to={"/register"}> <span  className="text-blue-700 hover:underline ">Create account</span> </Link>
        </div>

        <Button className='bg-violet-500' onClick={LoginForm} type="submit">Login</Button>
      </div>
    </Card>
    

      
    </div>
<Footers/>
        </>

  );
}

export default Signin;
