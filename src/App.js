import React, { useState } from "react";
import Nav from "./components/header-nav";
import Home from "./components/home";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  let [users, setUsers] = useState([
    {
      id: 1,
      name: "Gandalf the Grey",
      email: "gandalf@email.com",
      password: "YouShallNotPass!",
      phone_number: "1234567",
    },
    {
      id: 2,
      name: "Frodo Baggins",
      email: "frodo@shire.net",
      password: "SamWasTheHero",
      phone_number: "",
    },
    {
      id: 3,
      name: "Gollum",
      email: "gollum@gollum.gollum",
      password: "MyPrecious",
      phone_number: "8675309",
    },
  ]);
  let [currentUser, setCurrentUser] = useState({});
  let [passwords, setPasswords] = useState([
    {
      id: 1,
      user_id: 1,
      site: "Google",
      username: "gandygrey",
      password: "Shadowfax",
    },
    {
      id: 2,
      user_id: 1,
      site: "Pipeweed Depot",
      username: "maiar",
      password: "Istari",
    },
    {
      id: 3,
      user_id: 2,
      site: "Shire Connect",
      username: "BestNephew",
      password: "UncleBilbo",
    },
    {
      id: 4,
      user_id: 2,
      site: "Shire Community Calandar",
      username: "FrodoBaggs",
      password: "EleventyOneIsNotANumber",
    },
    {
      id: 5,
      user_id: 3,
      site: "Sushi Grade Fish Warehouse",
      username: "gollum",
      password: "MyPriceous",
    },
    {
      id: 6,
      user_id: 3,
      site: "Caves Rock",
      username: "gollum",
      password: "MyPrecious",
    },
  ]);
  let [signupModal, setSignupModal] = useState(false);
  let [loginModal, setLoginModal] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(true);

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
    setIsLoggedIn(true);

    let userArray = [...users];
    let newUserArray = userArray.push(userInfo);

    setUsers(newUserArray);
    console.log(newUserArray);
  }

  function handleLogin(users, userEmail, password) {
    let userToValidate = users.filter(user.email === userEmail);

    if (userToValidate === undefined) {
      alert("Incorrect Email Address");
    } else if (userToValidate.password === password) {
      setCurrentUser(userToValidate);
    } else if (userToValidate.password != password) {
      alert("Incorrect Password");
    }
  }

  return (
    <div className='App'>
      <Nav
        logStatus={handleNavDisplay}
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
      />
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
            handleLogin={handleLogin}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
