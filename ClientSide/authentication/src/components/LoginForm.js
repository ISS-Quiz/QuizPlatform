import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
function LoginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    useEffect(() =>{
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
       console.log(name,password)
      }
 }, [formErrors])
    const url = "http://localhost:8000/api/signin"
    const submit = () => {
    axios.post(url, {  
          name,
          password
    }).then(res => alert("You Have Successfully Logged into Jareb!"))
    .catch(error =>alert("invalid username or password please try again!"))
    setFormErrors(validate(name,password))
    setIsSubmit(true)
  } 
  const validate = (name,password) => {
    const errors= {};
    const regex = /^[^\s@]+[^\s@]+\.[^\s@]{2,}$/i;
    if(!name){
       errors.name = "Username is required!";  
    }
    if(!password){
       errors.password = "Password is required!"
    }
    return errors;
}
    return ( 
        <div>
             <React.Fragment>
               <label for='username' > USERNAME </label>
               <input type='text' id='username' value={name} onChange={e=>setName(e.target.value)} required />
               <p>{formErrors.name}</p>
               <label for='password'> PASSWORD </label>
               <input type='password' id='password' value={password} onChange={e=>setPassword(e.target.value)} required/>
               <p>{formErrors.password}</p>
               <button className="submit"  onClick={submit} >Submit</button>
            </React.Fragment>
        </div>
     );
}

export default LoginForm;