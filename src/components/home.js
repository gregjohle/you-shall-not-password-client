import React from "react";
import Login from "./login";
import Signup from "./signup";
import Modal from "react-modal";
import "./home.css";
import "./modal.css";

// Modal.setAppElement("#root");

export default function Home(props) {
  let {
    openLoginModal,
    openSignupModal,
    loginModal,
    signupModal,
    closeLoginModal,
    closeSignupModal,
    handleNewUser,
    handleLogin,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    verifyPassword,
    setVerifyPassword,
    userPhoneNumber,
    setUserPhoneNumber,
    userName,
    setUserName,
  } = props;

  return (
    <div className='home'>
      <h2 className='fancy'>More Secure Than Thorin's Tomb</h2>
      <p>
        This is a service to help store the many different passwords that you
        might have collected over the years. If you need a new password, we can
        generate a secure one for you! Please feel free to login or sign up
        below.
      </p>
      <p>
        If you would like to try out a demo account, please try one of the
        following:
      </p>

      <h3>
        <b>email:</b> gandalf@email.com <b>password:</b> YouShallNotPass!
      </h3>
      <h3>
        <b>email:</b> frodo@shire.net <b>password:</b> SamWasTheRealHero
      </h3>
      <h3>
        <b>email:</b> gollum@gollum.gollum <b>password:</b> MyPrecious
      </h3>

      <div className='landing-page-buttons'>
        <button onClick={(e) => openLoginModal()}>Login</button>
        <button onClick={(e) => openSignupModal()}>Sign Up</button>
      </div>
      <Modal
        isOpen={loginModal}
        className='modal'
        overlayClassName='overlay'
        onRequestClose={closeLoginModal}>
        <Login
          handleLogin={handleLogin}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
        />
      </Modal>
      <Modal
        isOpen={signupModal}
        className='modal'
        overlayClassName='overlay'
        onRequestClose={closeSignupModal}>
        <Signup
          handleNewUser={handleNewUser}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          verifyPassword={verifyPassword}
          setVerifyPassword={setVerifyPassword}
          userPhoneNumber={userPhoneNumber}
          setUserPhoneNumber={setUserPhoneNumber}
          userName={userName}
          setUserName={setUserName}
        />
      </Modal>
    </div>
  );
}
