import React from "react";
import "./login.css";

export default function Login(props) {
  let {
    handleLogin,
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
    handleLogin(loginEmail, loginPassword);
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type='text'
            name='email'
            value={loginEmail}
            onChange={(e) => handleEmail(e)}
            required
            placeholder='Email Address'
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            value={loginPassword}
            onChange={(e) => handlePassword(e)}
            required
            placeholder='Password'
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  );
}
