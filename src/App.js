import React, { useState } from "react";
import Modal from "react-modal";
import Login from "./components/login";
import Signup from "./components/signup";
import "./App.css";

// Modal.setAppElement("#App");

function App() {
  let { users, setUsers } = useState([]);
  let { currentUser, setCurrentUser } = useState("");
  let { passwords, setPasswords } = useState([]);
  let { signupModal, setSignupModal } = useState(false);
  let { loginModal, setLoginModal } = useState(false);

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

  return (
    <div className='App'>
      <h1>You Shall Not Password</h1>
      <p>
        This is a service to help store the many different passwords that you
        might have collected over the years. If you need a new password, we can
        generate a secure one for you! Please feel free to login or sign up
        below.
      </p>
      <div className='landing-page-buttons'>
        <button onClick={() => openLoginModal()}>Login</button>
        <button onClick={() => openSignupModal()}>Sign Up</button>
      </div>
      <Modal isOpen={loginModal} onRequestClose={closeLoginModal}>
        <Login />
      </Modal>
      <Modal isOpen={signupModal} onRequestClose={closeSignupModal}>
        <Signup />
      </Modal>
    </div>
  );
}

export default App;
