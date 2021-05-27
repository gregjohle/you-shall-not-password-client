import React from "react";
import ReactDOM from "react-dom";
import PasswordsList from "./passwords-list.js";

it("renders without crashing", () => {
  const passwordsRef = {
    current: true,
  };

  const passwords = [
    {
      site: "Site",
      username: "username",
      password: "password",
      id: 1,
      deletePassword: "delete",
    },
  ];

  function getAllPasswords() {
    console.log("testing");
  }

  const div = document.createElement("div");

  ReactDOM.render(
    <PasswordsList
      passwordsRef={passwordsRef}
      passwords={passwords}
      getAllPasswords={getAllPasswords}
    />,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
