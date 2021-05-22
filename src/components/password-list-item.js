import React from "react";
import "./password-list-item.css";

export default function PasswordListItem(props) {
  let { site, username, password, passwordId, deletePassword } = props;

  function handleDelete(e) {
    e.preventDefault();
    deletePassword(passwordId);
  }

  return (
    <li>
      <div className='siteTitle'>
        <h2>{site}</h2>
      </div>
      <div className='siteInfo'>
        <h3>Username: {username}</h3>
        <h3>Password: {password}</h3>
        <button onClick={(e) => handleDelete(e)}>Delete</button>
      </div>
    </li>
  );
}
