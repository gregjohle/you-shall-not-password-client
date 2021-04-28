import React from "react";

export default function Login(props) {
  return (
    <form>
      <label>Username:</label>
      <input type='text' name='username' />
      <label>Password:</label>
      <input type='text' name='password' />
      <a href='/passwords.html'>Submit</a>
    </form>
  );
}
