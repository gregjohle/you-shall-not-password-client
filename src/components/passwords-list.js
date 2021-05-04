import React from "react";
import PasswordListItem from "./password-list-item";
import PasswordListControls from "./password-list-controls";
import "./password-list.css";

export default function PasswordsList(props) {
  let { currentUser, passwords, addPassword } = props;

  let userPasswords = passwords.filter(
    (password) => password.user_id === currentUser.id
  );

  let passwordsList = userPasswords.map((password) => (
    <PasswordListItem
      site={password.site}
      username={password.username}
      password={password.password}
      key={password.id}
    />
  ));

  return (
    <div>
      <PasswordListControls
        userPasswords={userPasswords}
        addPassword={addPassword}
        currentUser={currentUser}
      />
      <ul>{passwordsList}</ul>
    </div>
  );
}
