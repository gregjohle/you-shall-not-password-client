import React from "react";
import Login from "./login";
import Signup from "./signup";
import Modal from "react-modal";

Modal.setAppElement("#root");

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
    users,
  } = props;

  return (
    <div>
      <p>
        This is a service to help store the many different passwords that you
        might have collected over the years. If you need a new password, we can
        generate a secure one for you! Please feel free to login or sign up
        below.
      </p>
      <div className='landing-page-buttons'>
        <button onClick={(e) => openLoginModal()}>Login</button>
        <button onClick={(e) => openSignupModal()}>Sign Up</button>
      </div>
      <Modal isOpen={loginModal} onRequestClose={closeLoginModal}>
        <Login handleLogin={handleLogin} users={users} />
      </Modal>
      <Modal isOpen={signupModal} onRequestClose={closeSignupModal}>
        <Signup handleNewUser={handleNewUser} />
      </Modal>
    </div>
  );
}
