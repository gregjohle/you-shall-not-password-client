import React from "react";
import Modal from "react-modal";
import AddPassword from "./add-password";

export default function PasswordListControls(props) {
  let {
    passwordSearch,
    setPasswordSearch,
    // userPasswords,
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
  } = props;

  function handlePasswordSearch(event) {
    setPasswordSearch(event.target.value);
  }

  function handlePasswordModalClose() {
    setAddPasswordModal(!addPasswordModal);
  }

  return (
    <div className='controls'>
      <input
        type='text'
        value={passwordSearch}
        onChange={(e) => handlePasswordSearch(e)}
        placeholder='Search'
      />
      <button onClick={() => handlePasswordModalClose()}>Add Password</button>
      <Modal
        isOpen={addPasswordModal}
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
        />
      </Modal>
    </div>
  );
}
