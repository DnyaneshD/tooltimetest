import React from "react";
import ReactDOM from "react-dom";
import { Questions } from "./questionsComponent";

it("render sucess", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Questions />, div);
  ReactDOM.unmountComponentAtNode(div);
});
