'use client'
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';

import swal from 'sweetalert';

import { Alert, Button } from '@mui/material';
const Login = () => {

  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleSignInPhone = () => {
  }
  const handleSignInGoogle = () => {
  }
  const handleRegsiter = (e) => {
    e.preventDefault();
    swal("Good job!", "Registration Successful!", "success");

    // Handle form submission here (e.g., place order, validate data)
    console.log("formData submit");
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    swal("Good job!", "Login Successful!", "success");
  }


  return (
    <>
      <div className="Auth">
        <div className="Auth_container">

         
          
          {
            register ?
              (
                <>
                  <form className='form_login' onSubmit={handleRegsiter}>

                    <input
                      required
                      type="email"
                      placeholder="Email"
                      value={email}
                      // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="outlined" type="submit" >Register</Button>
                  </form>
                </>
              ) :
              <>
                <form className='form_login' onSubmit={handleSignIn}>

                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    required
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button variant="outlined" type="submit" >Login</Button>
                </form>
              </>
          }
          <div className='already'>
            <p onClick={() => { setRegister(!register) }} href="">{register ? "Have an account?" : "Create an account"}</p>
          </div>
          <div>

            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </div>
        </div>




      </div>
    </>
  )
}
export default Login;