import React from "react";
import "./add-password.css";
import Modal from "react-modal";

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
    <div classname='addNew'>
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
        overlayClassName='overlay'
        onRequestClose={handleGenerateCancel}>
        <div className='generate'>
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
          <label for='numbers'>Numbers</label>
          <input
            className='checkbox'
            type='checkbox'
            value={numbers}
            name='numbers'
            onChange={(e) => handleNumbers(e)}
          />
          <label for='sumbols'>Symbols</label>
          <input
            className='checkbox'
            type='checkbox'
            value={symbols}
            name='symbols'
            onChange={(e) => handleSymbols(e)}
          />
          <label for='uppercase'>Uppercase</label>
          <input
            className='checkbox'
            type='checkbox'
            value={uppercase}
            name='uppercase'
            onChange={(e) => handleUppercase(e)}
          />
          <div>
            <button>Submit</button>
            <button onClick={handleGenerateCancel}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
