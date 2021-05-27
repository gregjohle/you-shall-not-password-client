import React, { useRef, useState } from "react";
import Nav from "./components/header-nav";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PasswordsList from "./components/passwords-list";
import isDeepEqual from "fast-deep-equal/react";

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
  let [generateModal, setGenerateModal] = useState(false);
  let [length, setLength] = useState(10);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [uppercase, setUppercase] = useState(false);

  // this useRef is in place so that when passwords are added or deleted, the list can be re-rendered accordingly
  const passwordsRef = useRef(passwords);

  //this compares the passwords when signing up to ensure the passwords are confirmed
  function comparePasswords({ passwords }) {
    if (!isDeepEqual(passwordsRef.current, passwords)) {
      passwordsRef.current = passwords;
    }
  }

  // These are for handling the modals
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

  // function to add a new user
  function handleNewUser(userName, userEmail, userPassword, userPhoneNumber) {
    let newUserObject = {
      name: userName,
      email: userEmail.toLowerCase(),
      password: userPassword,
      phone_number: userPhoneNumber,
    };
    fetch(process.env.REACT_APP_REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserObject),
    })
      .then((res) => {
        if (res.ok) {
          setSignupModal(!signupModal);
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  // function to login an existing user
  function handleLogin(userEmail, userPassword) {
    let loginInfo = {
      email: userEmail,
      password: userPassword,
    };
    fetch(process.env.REACT_APP_LOGIN_URL, {
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
        alert(err);
      });
  }

  // function to clear everything when logged out
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
      setPasswords([]);
      setUserName("");
      setPasswordSearch("");
      setAddSite("");
      setAddUsername("");
      setAddNewPassword("");
    }
  }

  // get all passwords for the current user
  function getAllPasswords() {
    let bodyInfo = {
      user_id: currentUser.id,
    };
    fetch(process.env.REACT_APP_PASSWORDS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyInfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        setPasswords(responseJson);
        comparePasswords(passwords);
      })
      .catch((err) => {
        alert(err);
      });
  }

  // This allows a password to be deleted
  function deletePassword(id) {
    let deleteInfo = {
      id: id,
    };
    fetch(process.env.REACT_APP_DELETE_PASSWORD_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteInfo),
    })
      .then((res) => {
        if (res.ok) {
          getAllPasswords();
        }
        throw new Error(res.statusText);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //function to add a new password for the logged-in user
  function addPasswordToArray(site, username, password) {
    fetch(process.env.REACT_APP_ADD_PASSWORD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        site: site,
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setAddPasswordModal(false);
          getAllPasswords();
        }
        throw new Error(response.statusText);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // this allows the same route of "/" to be used for the landing page and the passwords list of  logged-in user
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
          passwordsRef={passwordsRef}
          deletePassword={deletePassword}
          generateModal={generateModal}
          setGenerateModal={setGenerateModal}
          length={length}
          setLength={setLength}
          numbers={numbers}
          setNumbers={setNumbers}
          symbols={symbols}
          setSymbols={setSymbols}
          uppercase={uppercase}
          setUppercase={setUppercase}
        />
      );
    }
  };

  let about = () => {
    return <About />;
  };

  return (
    <div className='App'>
      <Nav
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        handleNavLoginLogout={handleNavLoginLogout}
      />
      <Switch>
        <Route path='/about'>{about}</Route>
        <Route path='/'>{homePage}</Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
