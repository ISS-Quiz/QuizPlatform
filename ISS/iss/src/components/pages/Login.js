import React from 'react';
import {useState, useEffect} from 'react';
import { loginUser } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import Error from '../Error';
import '../../App.css';

export default function SignUp() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const loginstate = useSelector(state => state.loginUserReducer)
    const {loading,error} = loginstate

    const dispatch = useDispatch()
    const navigate = useNavigate()


   useEffect(() => {
  
     if (sessionStorage.getItem('currentUser'))
     {
       navigate("/")
     }
   }, [])
   function login () {
     const user= {name, password}
     dispatch(loginUser(user, navigate))
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
    return(
        <div className='login'>
        <div className="login-register-wrapper">
        <div className="nav-buttons"> 
        <div className='form-group' >
        <h1  id="registerBtn" > Login </h1>
        {loading && (<Loading/>) }  
        {error && (<Error error='Invalid credentials'/>)}
        <label for='username' > USERNAME </label>
               <input type='text' id='username' value={name} onChange={e=>setName(e.target.value)} required />
               <p className='paragraph'>{formErrors.name}</p>
               <label for='password'> PASSWORD </label>
               <input type='password' id='password' value={password} onChange={e=>setPassword(e.target.value)} required/>
               <p className='paragraph'>{formErrors.password}</p>
               <button className="submit"  onClick={login} >Submit</button>
               <div className='box'>
               <span>Create an account  <Link to='/sign-up' >Sign Up</Link> </span>
               </div>

        </div>
        </div>
        </div>
        </div>
    )
}