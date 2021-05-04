import React from "react";
import "./password-list-item.css";

export default function PasswordListItem(props) {
  let { site, username, password } = props;

  return (
    <li>
      <div className='siteTitle'>
        <h2>{site}</h2>
      </div>
      <div className='siteInfo'>
        <h3>Username: {username}</h3>
        <h3>Password: {password}</h3>
      </div>
    </li>
  );
}
