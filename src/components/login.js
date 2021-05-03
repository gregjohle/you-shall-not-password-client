import React from "react";
import "./login.css";

export default function Login(props) {
  let {
    handleLogin,
    users,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
  } = props;

  function handleEmail(event) {
    setLoginEmail(event.target.value);
  }

  function handlePassword(event) {
    setLoginPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin([...users], loginEmail, loginPassword);
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Email:</label>
          <input
            type='text'
            name='email'
            value={loginEmail}
            onChange={(e) => handleEmail(e)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={loginPassword}
            onChange={(e) => handlePassword(e)}
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  );
}
