import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from "../../assets/default-img.png"
import LoginFormPage from '../LoginFormPage';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [revealForm, setRevealForm] = useState(false);

  const showForm = (e) => {
    e.preventDefault();
    if (!revealForm) setRevealForm(true);
    else setRevealForm(false);
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink onClick={showForm} to="/login" className="link">Log In</NavLink>
        <NavLink to="/signup" className="link">Sign Up</NavLink>
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
      {revealForm &&
        <LoginFormPage />
      }
    </div>
  );
}

export default Navigation;
