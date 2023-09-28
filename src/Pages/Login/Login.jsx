import React, { useState } from 'react';
import './Login.css';
import Footer from '../Foooter/Footer';
import Home from '../HOme/Home';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUserName] = useState()
  const [email, setemail] = useState()
  const [password, setPassword] = useState()
  const [reTypepassword, setReTypePassword] = useState()
  const [showLogin, setShowLogin] = useState(true);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [reTypePasswordError, setReTypePasswordError] = useState(false);

  const navigate = useNavigate(); // Get the navigate function from React Router

  const LoginForm = async () => {
    if (!email || !password) {
      console.log('Value is not Given');
      return
    }
    else {
      try {
        let response = await axios.post(`https://glorious-hat-bat.cyclic.app/login`, {
          email: email,
          password: password
        }, {
          withCredentials: true
        })
        console.log("login successful");
        navigate('/', { replace: true })
      } catch (error) {
        console.log(error)
        setErrorMessage('Invalid credentials'); 
      }
    }
  };


  const signupForm = async () => {


    console.log('Signup Form');
    if (!email || !password || !reTypepassword) {
      setEmailError(!email);
      setPasswordError(!password);
      setReTypePasswordError(!reTypepassword);
      return;
    }

    if (password !== reTypepassword) {
      setPasswordMatchError(true);
      setErrorMessage('Passwords do not match');
      return;
    }
    if (email && password && reTypepassword) {
      try {
        const response = await axios.post('https://glorious-hat-bat.cyclic.app/signup', {
          email,
          password,
        });

        // Handle the response according to your needs
        if (response.status === 201) {
          console.log('Signup successful');
          setShowLogin(true);
          // Perform any necessary actions on successful signup
        } else {
          console.log('Signup failed');
          // Handle signup failure
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }



    }










  };








  const toggleSignup = () => {
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      <Home />
      <div className="form-modal">
        <div className="form-toggle">
          <button
            id="login-toggle"
            onClick={toggleLogin}
            style={{
              backgroundColor: showLogin ? 'rgb(236, 12, 54)' : '#fff',
              color: showLogin ? '#fff' : '#222',
            }}
          >
            log in
          </button>
          <button
            id="signup-toggle"
            onClick={toggleSignup}
            style={{
              backgroundColor: showLogin ? '#fff' : 'rgb(236, 12, 54)',
              color: showLogin ? '#222' : '#fff',
            }}
          >
            sign up
          </button>
        </div>

        <div id="login-form" style={{ display: showLogin ? 'block' : 'none' }}>
          <form>
            <input
              onChange={(event) => { setemail(event.target.value); setEmailError(false); }}
              type="text"
              placeholder="Enter email or username"
              className={emailError ? 'error' : ''}
            />
            {emailError && <p className="error-message">Email is required</p>}

            <input onChange={(event) => { setPassword(event.target.value) }} type="password" placeholder="Enter password" />
            <button onClick={LoginForm} type="button" className="btn login">


              login
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>
              <a href="javascript:void(0)">Forgotten account</a>
            </p>
            <hr />
          </form>
        </div>

        <div id="signup-form" style={{ display: showLogin ? 'none' : 'block' }}>
          <form>
            <input
              onChange={(event) => { setemail(event.target.value); setEmailError(false); }}
              type="email"
              placeholder="Enter your email"
              className={emailError ? 'error' : ''}
            />
            <input
              onChange={(event) => { setUserName(event.target.value); setEmailError(false); }}
              type="text"
              placeholder="Enter your UserName"
              className={emailError ? 'error' : ''}
            />
            {emailError && <p className="error-message">UserName  is required</p>}

            <input
              onChange={(event) => { setPassword(event.target.value); setPasswordError(false); }}
              type="password"
              placeholder="Create password"
              className={passwordError ? 'error' : ''}
            />
            {passwordError && <p className="error-message">Password is required</p>}

            <input
              onChange={(event) => { setReTypePassword(event.target.value); setReTypePasswordError(false); }}
              type="password"
              placeholder="Retype Password"
              className={reTypePasswordError ? 'error' : ''}
            />
            {reTypePasswordError && <p className="error-message">Retype password is required</p>}
            {passwordMatchError && <p className="error-message">{errorMessage}</p>}

            <button type="button" onClick={signupForm} className="btn signup">
              create account
            </button>
            <p>
              Clicking <strong>create account</strong> means that you agree to our{' '}
              <a href="javascript:void(0)">terms of services</a>.
            </p>
            <hr />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
