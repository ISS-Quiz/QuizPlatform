import React from "react";
import  { useState, useEffect } from "react";
import axios from "axios";
const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

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
    }).then(res => alert("Account created successfully!"))
    .catch(error =>console.log(error.message))
    setFormErrors(validate(name,email,password))
    setIsSubmit(true)
  }

  const validate = (name,email,password) => {
       const errors= {};
       const regex = /^[^\s@]+[^\s@]+\.[^\s@]{2,}$/i;
       if(!name){
          errors.name = "Username is required!";  
       }
       if(!email){
          errors.email = "Email is required!"
       }
       if(!password){
          errors.password = "Password is required!"
       }
       return errors;
  }
  
    return ( 
        <div>
            <div className="form-control">
            
             <label for='fullname'> full name </label>
             <input type='text' id='fullname' value={name} onChange={e=>setName(e.target.value)} required />
             <p>{formErrors.name}</p>
             </div>
             <label for='email'> email </label>
             <input type='email' id='email' value={email} onChange={e=>setEmail(e.target.value)} required />
             <p>{formErrors.email}</p>
             <label for='password'> password </label>
             <input type='password' id='password' value={password} onChange={e=>setPassword(e.target.value)} required />
             <p>{formErrors.password}</p>
             <label for='confirmpassword'> confirm password </label>
             <input type='text' id='confirmpassword' />
             <button type='submit' className="submit" onClick={submit}>Submit</button>
           
        </div>
     );
}

export default RegisterForm ;