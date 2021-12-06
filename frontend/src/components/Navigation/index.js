import React, { useState, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../assets/default-img.png"
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [revealLogin, setRevealLogin] = useState(false);
  const [revealSignup, setRevealSignup] = useState(false);
  const inputRef = React.createRef();

  const showLoginForm = (e) => {
    e.preventDefault();
    if (!revealLogin) setRevealLogin(true);
    else setRevealLogin(false);
  };

  const showSignupForm = (e) => {
    e.preventDefault();
    if (!revealSignup) setRevealSignup(true);
    else setRevealSignup(false);
  };

  const handleOutsideClick = useCallback(() => {
    if (document.activeElement === inputRef.current) return;
    else {
      setRevealLogin(false);
      setRevealSignup(false);
    }
  }, [inputRef]);

  useEffect(() => {
    if (revealSignup || revealLogin){
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return (() => {
      document.removeEventListener('click', handleOutsideClick);
    })
  }, [revealLogin, revealSignup, handleOutsideClick]);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/wines' className="link">Wine List</NavLink>
        <NavLink to={`/users/${sessionUser.id}`} className="link">My Page</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink onClick={showLoginForm} to="/login" className="link">Log In</NavLink>
        <NavLink onClick={showSignupForm} to="/signup" className="link">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="nav">
      <div className='banner-logo'>
        <NavLink exact to="/"><img className="logo" src={logo}/></NavLink>
        <NavLink exact to="/" className='banner'>Uncorked</NavLink>
      </div>
      <ul>
        <li >
          {isLoaded && sessionLinks}
        </li>
      </ul>
      {revealLogin &&
        <LoginFormPage />
      }
      {revealSignup &&
        <SignupFormPage />
      }
    </div>
  );
}

export default Navigation;
