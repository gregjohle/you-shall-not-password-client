import React, { useEffect } from "react";
import PasswordListItem from "./password-list-item";
import PasswordListControls from "./password-list-controls";
import "./password-list.css";

export default function PasswordsList(props) {
  let {
    currentUser,
    passwords,
    addPassword,
    passwordSearch,
    setPasswordSearch,
    addPasswordModal,
    setAddPasswordModal,
    addSite,
    setAddSite,
    addUsername,
    setAddUsername,
    addNewPassword,
    setAddNewPassword,
    addPasswordToArray,
    getAllPasswords,
  } = props;

  useEffect(() => {
    getAllPasswords();
  }, [setAddPasswordModal]);

  // console.log(passwords);

  let userPasswords = passwords;

  let searchUserPasswords = new RegExp(passwordSearch, "i");

  if (passwordSearch) {
    userPasswords = userPasswords.filter((password) =>
      searchUserPasswords.test(password.site)
    );
  }

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
        passwordSearch={passwordSearch}
        setPasswordSearch={setPasswordSearch}
        addPasswordModal={addPasswordModal}
        setAddPasswordModal={setAddPasswordModal}
        addSite={addSite}
        setAddSite={setAddSite}
        addUsername={addUsername}
        setAddUsername={setAddUsername}
        addNewPassword={addNewPassword}
        setAddNewPassword={setAddNewPassword}
        addPasswordToArray={addPasswordToArray}
        passwords={passwords}
      />
      <ul>{passwordsList}</ul>
    </div>
  );
}
