import React from "react";
import ReactDOM from "react-dom";
import AddPassword from "./add-password";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AddPassword />, div);

  ReactDOM.unmountComponentAtNode(div);
});
