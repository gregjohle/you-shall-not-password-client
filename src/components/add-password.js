import React from "react";
import "./add-password.css";

export default function AddPassword(props) {
  let {
    addSite,
    setAddSite,
    addUsername,
    setAddUsername,
    addNewPassword,
    setAddNewPassword,
    addPasswordToArray,
    setAddPasswordModal,
  } = props;

  function handleSiteChange(event) {
    setAddSite(event.target.value);
  }

  function handleUsernameChange(event) {
    setAddUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setAddNewPassword(event.target.value);
  }

  function handlePasswordSubmit(event) {
    event.preventDefault();
    addPasswordToArray(addSite, addUsername, addNewPassword);
  }

  function handleCancel(event) {
    event.preventDefault();
    setAddSite("");
    setAddUsername("");
    setAddNewPassword("");
    setAddPasswordModal(false);
  }

  return (
    <form onSubmit={(e) => handlePasswordSubmit(e)}>
      <label>Site Name:</label>
      <input
        type='text'
        value={addSite}
        onChange={(e) => handleSiteChange(e)}
        required
      />
      <label>Username:</label>
      <input
        type='text'
        value={addUsername}
        onChange={(e) => handleUsernameChange(e)}
        required
      />
      <label>Password:</label>
      <input
        type='text'
        value={addNewPassword}
        onChange={(e) => handlePasswordChange(e)}
        required
      />
      <div className='buttons'>
        <button>Submit</button>
        <button onClick={(e) => handleCancel(e)}>Cancel</button>
      </div>
    </form>
  );
}
