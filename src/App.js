import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";

function App() {
  let { users, setUsers } = useState([]);
  let { currentUser, setCurrentUser } = useState("");
  let { passwords, setPasswords } = useState([]);

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
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default App;
