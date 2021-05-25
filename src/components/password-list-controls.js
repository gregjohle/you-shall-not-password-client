import React from "react";
import Modal from "react-modal";
import AddPassword from "./add-password";
import "./password-list-controls.css";

export default function PasswordListControls(props) {
  let {
    passwordSearch,
    setPasswordSearch,
    addPassword,
    currentUser,
    addPasswordModal,
    setAddPasswordModal,
    addSite,
    setAddSite,
    addUsername,
    setAddUsername,
    addNewPassword,
    setAddNewPassword,
    addPasswordToArray,
    passwords,
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

  function handlePasswordSearch(event) {
    setPasswordSearch(event.target.value);
  }

  function handlePasswordModalClose() {
    setAddPasswordModal(!addPasswordModal);
  }

  return (
    <div>
      <div className='controls'>
        <input
          type='text'
          value={passwordSearch}
          onChange={(e) => handlePasswordSearch(e)}
          placeholder='Search'
        />
        <button onClick={() => handlePasswordModalClose()}>Add Password</button>
      </div>

      <Modal
        isOpen={addPasswordModal}
        className='modal'
        overlayClassName='overlay'
        onRequestClose={(e) => handlePasswordModalClose()}>
        <AddPassword
          currentUser={currentUser}
          addPassword={addPassword}
          addSite={addSite}
          setAddSite={setAddSite}
          addUsername={addUsername}
          setAddUsername={setAddUsername}
          addNewPassword={addNewPassword}
          setAddNewPassword={setAddNewPassword}
          addPasswordToArray={addPasswordToArray}
          passwords={passwords}
          setAddPasswordModal={setAddPasswordModal}
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
      </Modal>
    </div>
  );
}
