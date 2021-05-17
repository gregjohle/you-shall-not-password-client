import React from "react";
import "./signup.css";

export default function Signup(props) {
  let {
    handleNewUser,
    users,
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

  function handleEmail(event) {
    setLoginEmail(event.target.value);
  }

  function handlePassword(event) {
    setLoginPassword(event.target.value);
  }

  function handleVerifyPassword(event) {
    setVerifyPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (loginPassword !== verifyPassword) {
      alert("Passwords do not match");
    } else if (loginPassword === verifyPassword) {
      handleNewUser(
        // [...users],
        userName,
        loginEmail,
        loginPassword,
        userPhoneNumber
      );
    }
  }

  function handleName(event) {
    setUserName(event.target.value);
  }

  function handlePhoneNumber(event) {
    event.preventDefault();
    setUserPhoneNumber(event.target.value);
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name</label>
        <input type='text' value={userName} onChange={(e) => handleName(e)} />
        <label>email address:</label>
        <input
          type='text'
          name='email-address'
          required
          value={loginEmail}
          onChange={(e) => handleEmail(e)}
        />
        <label>Password</label>
        <input
          type='password'
          name='password-new'
          required
          value={loginPassword}
          onChange={(e) => handlePassword(e)}
        />
        <label>Confirm Password</label>
        <input
          type='password'
          name='password-confirm'
          required
          value={verifyPassword}
          onChange={(e) => handleVerifyPassword(e)}
        />
        <label>Phone Number (optional)</label>
        <input
          type='tel'
          name='phone-number'
          value={userPhoneNumber}
          onChange={(e) => handlePhoneNumber(e)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
