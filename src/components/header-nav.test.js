import React from "react";
import ReactDOM from "react-dom";
import Nav from "./header-nav";
import handleNavDisplay from "../App";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Nav />, div);

  ReactDOM.unmountComponentAtNode(div);
});
