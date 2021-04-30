import React from "react";
import "./signup.css";

export default function Signup(props) {
  let { handleNewUser } = props;

  return (
    <div>
      <form>
        <label>email address:</label>
        <input type='text' name='email-address' required />
        <label>Password</label>
        <input type='text' name='password-new' required />
        <label>Confirm Password</label>
        <input type='text' name='password-confirm' required />
        <label>Phone Number (optional)</label>
        <input type='tel' name='phone-number' />
      </form>
      <button onClick={(e) => handleNewUser()}>Submit</button>
    </div>
  );
}
