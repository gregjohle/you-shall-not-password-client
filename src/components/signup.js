import React from "react";
import "./signup.css";

export default function Signup(props) {
  let {
    handleNewUser,
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
      handleNewUser(userName, loginEmail, loginPassword, userPhoneNumber);
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          value={userName}
          onChange={(e) => handleName(e)}
          placeholder='Name'
          required
        />
        <input
          type='text'
          name='email-address'
          required
          value={loginEmail}
          onChange={(e) => handleEmail(e)}
          placeholder='Email Address'
        />
        <input
          type='password'
          name='password-new'
          required
          value={loginPassword}
          onChange={(e) => handlePassword(e)}
          placeholder='Password'
        />
        <input
          type='password'
          name='password-confirm'
          required
          value={verifyPassword}
          onChange={(e) => handleVerifyPassword(e)}
          placeholder='Confirm Password'
        />
        <input
          type='tel'
          name='phone-number'
          value={userPhoneNumber}
          onChange={(e) => handlePhoneNumber(e)}
          placeholder='Phone Number'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
