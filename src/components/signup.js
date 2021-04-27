import React from "react";
import "./signup.css";

export default function signup(props) {
  return (
    <div>
      <form>
        <label>email address:</label>
        <input type='text' name='email-address' />
        <label>Password</label>
        <input type='text' name='password-new' />
        <label>Confirm Password</label>
        <input type='text' name='password-confirm' />
        <label>Phone Number (optional)</label>
      </form>
    </div>
  );
}
