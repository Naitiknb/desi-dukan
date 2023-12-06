import React, { useState } from 'react';
import NavBar from '../../MainPage/NavBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import './Login.css'
import { Link } from 'react-router-dom';
import {auth}  from '../../firebase.js';
import { signInWithEmailAndPassword} from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [setIcon] = useState(eyeOff);
  const [invalid,setinvalid]= useState(null);



  const Login = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up:", user);
      window.location.href="/Mainpage";
    } catch (error) {
      console.error("Sign-up error:", error.message);

      setinvalid("Invalid email or password")
    }
  };




  const toggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
    
  };
  return (
    <div>
      <NavBar />

      <div className='Login-container h-[500px] bg-[white]'>
        <b><h3 className='m-[40px] relative top-[50px]'>Login</h3></b>
        <b><p className='mt-[90px] ml-[30px] '>To login Into Your Account Please  Use The Form Below  </p></b>
        <form onSubmit={Login}>
          <div>
            <label className='ml-[30px] '>Email</label> 
           
            <input className='ml-[80px] w-[25%] bg-gray-100 '   style={{ border: '0.5px solid gray '
           }} type='email'  onChange={(event) => setEmail(event.target.value)}  ></input>
          </div>
          <div>
            <label className='ml-[30px]'>Password</label>
            <input
              className='ml-[52px] w-[25%] bg-gray-100 mt-[20px]'
              style={{ border: '0.5px solid gray' }}
              type={type}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />
           <FontAwesomeIcon onClick={toggle} className='toggle-password-icon relative right-[25px]' icon={type === 'password' ? faEye : faEyeSlash} />
          </div>

          <div>
            <input className='ml-[30px] mt-[21px] ' type='checkbox'></input>
            <label className='ml-[10px]'> Remember Me</label>
            <Link to="/Signup"><label className=' ml-[30px]'>Reset Password ?</label></Link>
          </div>

          <button className='login-btn  bg-[#4caf50] p-[10px] w-[150px] rounded-[20px] m-[30px]   '>Log in</button>
          <Link to="/signup">
          <button className='login-btn  bg-[#4caf50] p-[10px] w-[180px] rounded-[20px] m-[30px]   '>Create  Account</button></Link>
          
          {invalid && (
            <div className="error-message ml-[30px] mt-[10px] text-red-500">{invalid}</div>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default Login;