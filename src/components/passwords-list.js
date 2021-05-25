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
    passwordsRef,
    deletePassword,
    generateModal,
    setGenerateModal,
    length,
    setLength,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
    uppercase,
    setUppercase,
  } = props;

  // There is a warning about adding getAllPasswords to the dependency array here.
  //That makes this repeated call while the component is mounted. I only want it to run once, or when a password is added.
  useEffect(() => {
    getAllPasswords();
  }, [passwordsRef.current]);

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
      passwordId={password.id}
      deletePassword={deletePassword}
    />
  ));

  return (
    <div className='passwordsList'>
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
        generateModal={generateModal}
        setGenerateModal={setGenerateModal}
        length={length}
        setLength={setLength}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
        uppercase={uppercase}
        setUppercase={setUppercase}
      />
      <ul>{passwordsList}</ul>
    </div>
  );
}
