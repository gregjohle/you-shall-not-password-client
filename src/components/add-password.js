import React from "react";
import "./add-password.css";
import Modal from "react-modal";
import generator from "generate-password";

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

  // This uses an npm package to create a secure and random password
  function createPassword() {
    return generator.generate({
      lowercase: true,
      length: length,
      numbers: numbers,
      symbols: symbols,
      uppercase: uppercase,
    });
  }

  // This adds the created password to the state used to hold the value of a new password. The parameters reset to not adversely affect any additional passwords added.
  function handleCreatePassword(event) {
    event.preventDefault();
    let newPassword = createPassword();
    setAddNewPassword(newPassword);
    setGenerateModal(!generateModal);
    setNumbers(false);
    setSymbols(false);
    setUppercase(false);
  }

  function handleOpenGenerateModal(event) {
    event.preventDefault();
    setGenerateModal(!generateModal);
  }

  function handleGenerateCancel() {
    setGenerateModal(!generateModal);
    setLength(10);
    setNumbers(false);
    setSymbols(false);
    setUppercase(false);
  }

  function handleLength(event) {
    setLength(event.target.value);
  }

  function handleNumbers(event) {
    setNumbers(!numbers);
  }

  function handleSymbols(event) {
    setSymbols(!symbols);
  }

  function handleUppercase(event) {
    setUppercase(!uppercase);
  }

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
    <div className='addNew'>
      <h2>Add Password</h2>
      <form onSubmit={(e) => handlePasswordSubmit(e)}>
        <input
          type='text'
          value={addSite}
          onChange={(e) => handleSiteChange(e)}
          required
          placeholder='Site Name'
        />
        <input
          type='text'
          value={addUsername}
          onChange={(e) => handleUsernameChange(e)}
          required
          placeholder='Username'
        />
        <input
          type='text'
          value={addNewPassword}
          onChange={(e) => handlePasswordChange(e)}
          required
          placeholder='Password'
        />
        <div className='buttons'>
          <button>Submit</button>
          <button onClick={(e) => handleCancel(e)}>Cancel</button>
        </div>
        <div>
          <button onClick={(e) => handleOpenGenerateModal(e)}>
            Create Password?
          </button>
        </div>
      </form>
      <Modal
        isOpen={generateModal}
        className='generatePasswordModal'
        overlayClassName='generateOverlay'
        onRequestClose={handleGenerateCancel}>
        <div className='generate'>
          <p>
            This is where the magic happens. Use the following options to set
            the parameters for your password.
          </p>
          <div className='row'>
            <label for='length'>Length</label>
            <select
              name='length'
              value={length}
              onChange={(e) => handleLength(e)}>
              <option>6</option>
              <option>8</option>
              <option>10</option>
              <option>12</option>
              <option>14</option>
              <option>16</option>
            </select>
          </div>
          <div className='row'>
            <label for='numbers'>Numbers</label>
            <input
              className='checkbox'
              type='checkbox'
              value={numbers}
              name='numbers'
              onChange={(e) => handleNumbers(e)}
            />
          </div>
          <div className='row'>
            <label for='sumbols'>Symbols</label>
            <input
              className='checkbox'
              type='checkbox'
              value={symbols}
              name='symbols'
              onChange={(e) => handleSymbols(e)}
            />
          </div>
          <div className='row'>
            <label for='uppercase'>Uppercase</label>
            <input
              className='checkbox'
              type='checkbox'
              value={uppercase}
              name='uppercase'
              onChange={(e) => handleUppercase(e)}
            />
          </div>
          <div className='generateButtons'>
            <button onClick={(e) => handleCreatePassword(e)}>Submit</button>
            <button onClick={handleGenerateCancel}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
