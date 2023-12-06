import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../MainPage/NavBar';
import './Login.css';
import {auth}  from '../../firebase.js';
import { createUserWithEmailAndPassword} from 'firebase/auth';




const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();



  const SignIn = async (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      setPasswordsMatch(false); // Set state to indicate that passwords do not match
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, confirmPassword);
      const user = userCredential.user;
      console.log("User signed up:", user);
      navigate('/Login');
    } catch (error) {
      console.error("Sign-up error:", error.message);
    }
  };
  
  
  


  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  

  return (
    <div>
      <NavBar />
      <div className='Login-container h-[500px] bg-[white]'>
        <h3 className='m-[40px] relative top-[50px]'>Sign Up</h3>
        <p className='mt-[90px] ml-[30px]'>To sign up into your account, please use the form below.</p>
        <form onSubmit={SignIn}>
          <div>
            <label className='ml-[30px]'>Email</label>
            <input
              className='ml-[140px] w-[25%] bg-gray-100'
              style={{ border: '0.5px solid gray' }}
              type='email'
              onChange={(event)=>{setEmail(event.target.value)}}
            />
          </div>
          <div>
            <label className='ml-[30px]'>Password</label>
            <input
              className='ml-[112px] w-[25%] bg-gray-100 mt-[20px]'
              style={{ border: '0.5px solid gray' }}
              type={passwordVisibility ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
            />
            <FontAwesomeIcon
              onClick={togglePasswordVisibility}
              className='toggle-password-icon relative right-[25px]'
              icon={passwordVisibility ? faEye : faEyeSlash}
            />
          </div>
          <div>
            <label className='ml-[30px]'>Confirm Password</label>
            <input
              type='password'
              className='ml-[52px] w-[25%] bg-gray-100 mt-[20px]'
              style={{ border: '0.5px solid gray' }}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div>
            <input className='ml-[30px] mt-[21px]' type='checkbox' />
            <label className='ml-[10px]'> Remember Me</label>
          </div>
          <Link to="/Login">
          <button onClick={SignIn} className='login-btn bg-[#4caf50] p-[10px] w-[150px] rounded-[20px] m-[30px]'>
            Sign Up
          </button></Link>
          
          {!passwordsMatch && (
          <label className='donot ml-[10px] text-red-400'>Passwords do not match</label>
        )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
