import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./components/app/app";
import questionsListComponent from "./components/questionsList/questionsListComponent";
import questionDetailsComponent from "./components/questionDetails/questionDetailsComponent";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/questionsList" component={questionsListComponent} />
      <Route path="/questionDetails/:id" component={questionDetailsComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
