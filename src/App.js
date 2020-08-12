import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./Css/Main.css";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

import Nav from "./Components/Nav";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
