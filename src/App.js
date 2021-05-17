import React, { useState } from "react";
import Nav from "./components/header-nav";
import Home from "./components/home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PasswordsList from "./components/passwords-list";
import env from "react-dotenv";

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

  function checkForSession() {
    fetch("http://localhost:8000/api/users/")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          throw new Error("Unauthorized");
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        console.log(responseJson);
        setIsLoggedIn(true);
        setCurrentUser(responseJson);
      })
      .catch((error) => {
        alert(error);
      });
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
    // let newUserId = users.length + 1;
    let newUserObject = {
      // id: newUserId,
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

  function handleLogin(users, userEmail, userPassword) {
    fetch("http://localhost:8000/api/users/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        setCurrentUser(responseJson);
        setSignupModal(false);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        alert(err);
      });
    // .then(
    //   fetch("http://localhost:8000/api/users/login", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "http://localhost:3000",
    //     },
    //   })
    // )
    // .then((res) => {
    //   console.log(res);
    // });

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
          checkForSession={checkForSession}
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
