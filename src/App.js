import React, { useState } from "react";
import Nav from "./components/header-nav";
import Home from "./components/home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PasswordsList from "./components/passwords-list";

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
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [loginUserEmail, setLoginUserEmail] = useState("");
  let [loginUserPassword, setLoginUserPassword] = useState("");
  let [verifyPassword, setVerifyPassword] = useState("");
  let [userPhoneNumber, setUserPhoneNumber] = useState("");
  let [userName, setUserName] = useState("");
  let [passwordSearch, setPasswordSearch] = useState("");
  let [addPasswordModal, setAddPasswordModal] = useState(false);
  let [addSite, setAddSite] = useState("");
  let [addUsername, setAddUsername] = useState("");
  let [addNewPassword, setAddNewPassword] = useState("");

  function handleNavDisplay() {
    let logStatus = "";

    if (isLoggedIn === false) {
      logStatus = "Login";
    } else if (isLoggedIn === true) {
      logStatus = "Logout";
    }
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

  function findUserForLogin(users, userEmail) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === userEmail.toLowerCase()) {
        return users[i];
      }
    }
  }

  function handleNewUser(
    users,
    userName,
    userEmail,
    userPassword,
    userPhoneNumber
  ) {
    let newUserId = users.length + 1;
    let newUserObject = {
      id: newUserId,
      name: userName,
      email: userEmail.toLowerCase(),
      password: userPassword,
      phone_number: userPhoneNumber,
    };

    let checkForExistingUser = findUserForLogin([...users], userEmail);

    if (checkForExistingUser === undefined) {
      setIsLoggedIn(true);
      setUsers(users.concat(newUserObject));
      setCurrentUser(newUserObject);
      setSignupModal(false);
      console.log(newUserObject);
    } else if (checkForExistingUser !== undefined) {
      alert("There is already an account associated with this email.");
    }
  }

  function handleLogin(users, userEmail, userPassword) {
    fetch("https://evening-dusk-89744.herokuapp.com/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // setCurrentUser(res.user);
      setIsLoggedIn(true);
      setLoginModal(false);
    });

    // let userToValidate = findUserForLogin([...users], userEmail);

    // if (userToValidate === undefined) {
    //   alert("Incorrect email address.");
    // } else if (userToValidate.password !== userPassword) {
    //   alert("Incorrect Password");
    // } else if (userToValidate.password === userPassword) {
    //   setCurrentUser(userToValidate);
    //   setIsLoggedIn(true);
    //   setLoginModal(false);
    // }
  }

  function handleNavLoginLogout() {
    if (isLoggedIn === false) {
      setLoginModal(true);
    } else if (isLoggedIn === true) {
      setCurrentUser({});
      setIsLoggedIn(false);
      setLoginUserEmail("");
      setLoginUserPassword("");
      setVerifyPassword("");
      setUserPhoneNumber("");
    }
  }

  function addPasswordToArray(passwords, userId, site, username, password) {
    let newPasswordID = passwords.length + 1;

    let newPasswordObject = {
      id: newPasswordID,
      user_id: userId,
      site: site,
      username: username,
      password: password,
    };

    setPasswords(passwords.concat(newPasswordObject));
    setAddPasswordModal(false);
  }

  let homePage = () => {
    if (isLoggedIn === false) {
      return (
        <Home
          openLoginModal={openLoginModal}
          openSignupModal={openSignupModal}
          loginModal={loginModal}
          signupModal={signupModal}
          closeLoginModal={closeLoginModal}
          closeSignupModal={closeSignupModal}
          handleNewUser={handleNewUser}
          handleLogin={handleLogin}
          users={users}
          loginEmail={loginUserEmail}
          setLoginEmail={setLoginUserEmail}
          loginPassword={loginUserPassword}
          setLoginPassword={setLoginUserPassword}
          verifyPassword={verifyPassword}
          setVerifyPassword={setVerifyPassword}
          userPhoneNumber={userPhoneNumber}
          setUserPhoneNumber={setUserPhoneNumber}
          userName={userName}
          setUserName={setUserName}
        />
      );
    } else if (isLoggedIn === true) {
      return (
        <PasswordsList
          currentUser={currentUser}
          passwords={passwords}
          addPassword={setPasswords}
          passwordSearch={passwordSearch}
          setPasswordSearch={setPasswordSearch}
          addPasswordModal={addPasswordModal}
          setAddPasswordModal={setAddPasswordModal}
          addSite={addSite}
          setAddSite={setAddSite}
          addUsername={addUsername}
          setAddUsername={setAddUsername}
          addNewPassword={addNewPassword}
          setAddNewPassword={setAddNewPassword}
          addPasswordToArray={addPasswordToArray}
        />
      );
    }
  };

  return (
    <div className='App'>
      <Nav
        logStatus={handleNavDisplay}
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        handleNavLoginLogout={handleNavLoginLogout}
      />
      <Switch>
        <Route path='/'>{homePage}</Route>
      </Switch>
    </div>
  );
}

export default App;
