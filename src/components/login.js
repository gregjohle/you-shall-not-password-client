import React from "react";

export default function Login(props) {
  let { handleLogin, users } = props;

  return (
    <>
      <form>
        <label>Email:</label>
        <input type='text' name='email' />
        <label>Password:</label>
        <input type='password' name='password' />
      </form>
      <button
        onClick={(e) =>
          handleLogin([...users], e.target.value.email, e.target.value.password)
        }>
        Login
      </button>
    </>
  );
}
