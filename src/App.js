import React, { useState } from "react";
import Nav from "./components/header-nav";
import Home from "./components/home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PasswordsList from "./components/passwords-list";
import env from "react-dotenv";

function App() {
  let [currentUser, setCurrentUser] = useState({});
  let [passwords, setPasswords] = useState([]);
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

  function handleNewUser(userName, userEmail, userPassword, userPhoneNumber) {
    let newUserObject = {
      name: userName,
      email: userEmail.toLowerCase(),
      password: userPassword,
      phone_number: userPhoneNumber,
    };
    console.log(newUserObject);
    fetch("http://localhost:8000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserObject),
    }).then((res) => {
      if (res.ok) {
        setSignupModal(!signupModal);
      } else {
        console.log(res);
      }
    });
  }

  function handleLogin(userEmail, userPassword) {
    let loginInfo = {
      email: userEmail,
      password: userPassword,
    };
    fetch("http://localhost:8000/api/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        let currentUserObj = {
          email: userEmail,
          password: userPassword,
          name: responseJson.name,
          id: responseJson.id,
        };
        setCurrentUser(currentUserObj);
        setLoginModal(false);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
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

  function addPasswordToArray(passwords, site, username, password) {
    let newPasswordObject = {
      user_id: currentUser.id,
      site: site,
      username: username,
      password: password,
    };

    fetch("http://localhost:8000/api/passwords/add", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "true",
      },
      body: JSON.stringify({
        email: currentUser.email,
        password: currentUser.password,
        newPassword: newPasswordObject,
      }),
    }).then((response) => {
      if (response.ok) {
        setAddPasswordModal(false);
      }
      throw new Error(response.statusText);
    });
  }

  function getAllPasswords(userId) {
    fetch("http://localhost:8000/api/passwords/", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "true",
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
          // console.log(response);
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        console.log(responseJson);
        // setPasswords(responseJson);
      })
      .catch((err) => {
        alert(err);
      });
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
          getAllPasswords={getAllPasswords}
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
