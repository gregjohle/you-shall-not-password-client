import React from "react";
import { Link } from "react-router-dom";
import "./header-nav.css";
import "./fonts/UnifrakturCook/UnifrakturCook-Bold.ttf";

export default function Nav(props) {
  let { logStatus, currentUser, isLoggedIn, handleNavLoginLogout } = props;

  // This adds a nice greeting to welcome the current user.
  function welcomeUser() {
    let greeting = "";

    if (isLoggedIn === true) {
      greeting = "Welcome, " + currentUser.name;
    }

    return greeting;
  }

  // This was added to simplify the styling of the header and greeting when not logged in.
  function loginCSS() {
    let className = "";

    if (!isLoggedIn) {
      className = "notLoggedIn";
    }
    return className;
  }

  return (
    <header className={loginCSS()}>
      <div className='greeting'>
        <h1 className='header'>You Shall Not Password</h1>
        <h3 className='header'>{welcomeUser()}</h3>
      </div>

      <nav>
        <li className='header'>
          <Link to='/'>Home</Link>
        </li>
        <li className='header'>
          <Link to='/about'>About</Link>
        </li>
        <li className='header'>
          <Link to='/' onClick={(e) => handleNavLoginLogout(e)}>
            {logStatus()}
          </Link>
        </li>
      </nav>
    </header>
  );
}
