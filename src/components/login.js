import React from "react";

export default function Login(props) {
  let { handleLogin } = props;

  return (
    <>
      <form>
        <label>Username:</label>
        <input type='text' name='username' />
        <label>Password:</label>
        <input type='text' name='password' />
      </form>
      <button onClick={() => handleLogin()}>Login</button>
    </>
  );
}
