import React, { useState } from 'react';
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

  const showLoginForm = (e) => {
    e.preventDefault();
    if (!revealLogin) setRevealLogin(true);
    else setRevealLogin(false);
  };

  const showSignupForm = (e) => {
    e.preventDefault();
    if (!revealSignup) setRevealSignup(true);
    else setRevealSignup(false);
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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
        <img className="logo" src={logo}/>
        <h1 className='banner'>Uncorked</h1>
      </div>
      <ul>
        <li >
          <NavLink exact to="/" className="link">Home</NavLink>
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
