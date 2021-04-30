import React, { useState } from "react";
import Nav from "./components/header-nav";
import Home from "./components/home";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  let [users, setUsers] = useState([]);
  let [currentUser, setCurrentUser] = useState("");
  let [passwords, setPasswords] = useState([]);
  let [signupModal, setSignupModal] = useState(false);
  let [loginModal, setLoginModal] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleNavDisplay() {
    let logStatus = "";

    if (isLoggedIn === false) {
      logStatus = "Login";
    } else if (isLoggedIn === true) {
      logStatus = "Logout";
    }
    console.log(logStatus);
    return logStatus;
  }

  function openSignupModal() {
    setSignupModal(!signupModal);
  }

  function closeSignupModal() {
    setSignupModal(!signupModal);
  }

  function openLoginModal() {
    setLoginModal(!loginModal);
  }

  function closeLoginModal() {
    setLoginModal(!loginModal);
  }

  function handleNewUser(userInfo) {
    let userArray = [...users];
    let newUserArray = userArray.push(userInfo);

    setUsers(newUserArray);
    console.log(newUserArray);
  }

  return (
    <div className='App'>
      <Nav logStatus={handleNavDisplay} />
      <Switch>
        <Route path='/'>
          <Home
            openLoginModal={openLoginModal}
            openSignupModal={openSignupModal}
            loginModal={loginModal}
            signupModal={signupModal}
            closeLoginModal={closeLoginModal}
            closeSignupModal={closeSignupModal}
            handleNewUser={handleNewUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
