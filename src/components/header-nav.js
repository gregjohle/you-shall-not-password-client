import React from "react";
import { NavLink } from "react-router-dom";
import "./header-nav.css";
import "./fonts/UnifrakturCook/UnifrakturCook-Bold.ttf";

export default function Nav(props) {
  let { currentUser, isLoggedIn, handleNavLoginLogout } = props;

  // This adds a nice greeting to welcome the current user.
  function welcomeUser() {
    let greeting = "No Current User";

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

  // This switches the nav Login to Logout and vice versa
  function hideGreeting() {
    let greetingClass = "hidden";

    if (isLoggedIn) {
      greetingClass = "";
    }
    return greetingClass;
  }

  function handleNavDisplay() {
    let logStatus = "";

    if (isLoggedIn === false) {
      logStatus = "Login";
    } else if (isLoggedIn === true) {
      logStatus = "Logout";
    }
    return logStatus;
  }

  return (
    <header className={loginCSS()}>
      <div className='greeting'>
        <h1 className='header'>You Shall Not Password</h1>
        <h2 className={"header " + hideGreeting()}>{welcomeUser()}</h2>
      </div>

      <nav>
        <ul className='nav'>
          <li className='header'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='header'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='header'>
            <NavLink to='/' onClick={(e) => handleNavLoginLogout(e)}>
              {handleNavDisplay()}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
