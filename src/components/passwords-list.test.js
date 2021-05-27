import React from "react";
import ReactDOM from "react-dom";
import PasswordsList from "./passwords-list.js";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<PasswordsList />, div);

  ReactDOM.unmountComponentAtNode(div);
});
