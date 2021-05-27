import React from "react";
import { Link } from "react-router-dom";
import "./header-nav.css";
import "./fonts/UnifrakturCook/UnifrakturCook-Bold.ttf";

export default function Nav(props) {
  let { logStatus, currentUser, isLoggedIn, handleNavLoginLogout } = props;

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

  function hideGreeting() {
    let greetingClass = "hidden";

    if (isLoggedIn) {
      greetingClass = "";
    }
    return greetingClass;
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
        </ul>
      </nav>
    </header>
  );
}
