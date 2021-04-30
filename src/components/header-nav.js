import React from "react";
import { Link } from "react-router-dom";
import "./header-nav.css";

export default function Nav(props) {
  let { logStatus, currentUser, isLoggedIn } = props;

  function welcomeUser() {
    let greeting = "";

    if (isLoggedIn === true) {
      greeting = "Welcome, " + currentUser.name;
    }

    return greeting;
  }

  return (
    <header>
      <h1>You Shall Not Password</h1>
      <h3>{welcomeUser()}</h3>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/' onClick=''>
            {logStatus()}
          </Link>
        </li>
      </nav>
    </header>
  );
}
