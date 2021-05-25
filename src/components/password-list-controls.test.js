import React from "react";
import ReactDOM from "react-dom";
import PasswordListControls from "./password-list-controls";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<PasswordListControls />, div);

  ReactDOM.unmountComponentAtNode(div);
});
