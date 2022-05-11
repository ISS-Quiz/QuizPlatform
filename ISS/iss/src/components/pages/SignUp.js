import React from 'react';
import '../../App.css';
import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Success from '../Success';
import Error from '../Error';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() =>{
       console.log(formErrors);
       if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(name,email,password)
       }
  }, [formErrors])
  const url = "http://localhost:8000/api/signup"
  const submit = () => {
  axios.post(url, {  
        name,
        email,
        password
  }).then(setSuccess(true) ,setError(false))
  .catch((e) => console.log(e))
  setFormErrors(validate(name,email,password,confirmpassword))
  setIsSubmit(true)
}

const validate = (name,email,password, confirmpassword) => {
     const errors= {};
     const regex = /^[^\s@]+[^\s@]+\.[^\s@]{2,}$/i;
     if(!name){
        errors.name = "Username is required!";  
        setError(true);setSuccess(false)
     }
     if(!email){
        errors.email = "Email is required!";
        setError(true);setSuccess(false)

     }
     if(!password){
        errors.password = "Password is required!";
        setError(true);setSuccess(false)

     }
     if(!confirmpassword){
      errors.confirmpassword = "Password is required!";
      setError(true);setSuccess(false)

   }
     if(confirmpassword !== password){
      errors.confirmpassword="Password mismatch!";
      setError(true);setSuccess(false)

   }
     return errors;
}

  return ( 
    <div className='sign-up'>
      <div className="login-register-wrapper">
        <div className="nav-buttons"> 
        <div className='form-group' >
        <h2  id="registerBtn" > Register </h2>
        {success && (<Success success='You have been registred successfully'/>) }  
        {error && (<Error error='Invalid credentials'/>)}
          <div>
           <label for='fullname'> full name </label>
           <input placeholder= "Enter name" type='text' id='fullname' value={name} onChange={e=>setName(e.target.value)} required />
           <p className='paragraph'>{formErrors.name}</p>
           </div>
           <label for='email'> email </label>
           <input type='email' placeholder='Enter Email' id='email' value={email} onChange={e=>setEmail(e.target.value)} required />
           <p className='paragraph'>{formErrors.email}</p>
           <label for='password'> password </label>
           <input type='password' placeholder=' 6+ characters' id='password' value={password} onChange={e=>setPassword(e.target.value)} required />
           <p className='paragraph'>{formErrors.password}</p>
           <label for='confirmpassword'> confirm password </label>
           <input type='password' id='confirmpassword' value={confirmpassword} onChange={e=>setConfirmPassword(e.target.value)} />
           <p className='paragraph'>{formErrors.confirmpassword}</p>
           <button className="forgot-panel"  > <a href='#'> Forgot your password? </a></button>
          
        
   
           <button type='submit' className="submit" onClick={submit}>Submit</button>
           <div className='box'>
           <span>Already have an account ? <Link to='/Login' >Login</Link> </span>
           </div>
           </div> 
           </div>
      </div>
      </div>
   );
}