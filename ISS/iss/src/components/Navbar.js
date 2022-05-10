import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { Button } from './Button';
import { logoutUser } from '../actions/userActions';
import 'bootstrap'
import './NavBar.css';


function Navbar() {
    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true);
    const user = useSelector(state => state.loginUserReducer.currentUser)
    const dispatch = useDispatch()
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
      useEffect(() => {
        console.log("cu", user)
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
  return (
  <>
  <nav className='navbar'>
      <div className='navbar-container'>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              JaWEB <i className="far fa-check-square"/>
          </Link>


        <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' :'fas fa-bars'} />
      </div>
        <ul className={click ? 'nav-menu active':'nav-menu' }>
        <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/createQuiz' className='nav-links' onClick={closeMobileMenu}>
               Create Quiz
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/TakeQuiz' className='nav-links' onClick={closeMobileMenu}>
              Take a Quiz
            </Link>
        </li> 
        {user ? (
            <li className='nav-item'>
            <div className="dropdown" >
            <button className="dropbtn">{user.name}</button>
            <div className="dropdown-content">
            <a href="#">Account details</a>
            <a href="#">TakeQuiz </a>
            <a href="#" onClick={() => dispatch(logoutUser())}>Logout</a>
            </div>
          </div>
          </li>
          ) : (
            <li className='nav-item'>
            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
               Log in
            </Link>
            </li>
          )}
       
       
        <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
               Sign Up
            </Link>
        </li>

        </ul>

        {!user && button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>

  </nav>
  </>
  );
}

export default Navbar;
