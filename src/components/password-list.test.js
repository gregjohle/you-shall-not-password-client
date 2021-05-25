import React from "react";
import ReactDOM from "react-dom";
import PasswordsList from "./password-list";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<PasswordsList />, div);

  ReactDOM.unmountComponentAtNode(div);
});
